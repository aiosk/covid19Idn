package prov

import (
	"fmt"
	"strconv"
	"strings"
	"time"

	"github.com/aiosk/covidn/libs"
	"github.com/jordic/goics"
)

// Perkembangan ...
type Perkembangan struct {
	Date         int64 `json:"tanggal"`
	Death        int   `json:"MENINGGAL"`
	Active       int   `json:"DIRAWAT_OR_ISOLASI"`
	Recover      int   `json:"SEMBUH"`
	Case         int   `json:"KASUS"`
	TotalDeath   int   `json:"AKUMULASI_MENINGGAL"`
	TotalActive  int   `json:"AKUMULASI_DIRAWAT_OR_ISOLASI"`
	TotalRecover int   `json:"AKUMULASI_SEMBUH"`
	TotalCase    int   `json:"AKUMULASI_KASUS"`
}

// GetTag ...
func (v Perkembangan) GetTag(tag string) map[string]string {
	return libs.StructGetTags(v, tag)
}

// FileItem ...
type FileItem struct {
	Provinsi         string         `json:"provinsi"`
	ListPerkembangan []Perkembangan `json:"list_perkembangan"`
}

// GetTags ...
func (v FileItem) GetTags(tag string) map[string]string {
	return libs.StructGetTags(v, tag)
}

// ToCsv ...
func (v FileItem) ToCsv() [][]string {

	var dataCsv [][]string
	itemTags := v.GetTags("json")
	listPerkembanganTags := v.ListPerkembangan[0].GetTag("json")
	title := []string{
		itemTags["Provinsi"], listPerkembanganTags["Date"],
		listPerkembanganTags["TotalCase"], listPerkembanganTags["Case"],
		listPerkembanganTags["TotalRecover"], listPerkembanganTags["Recover"],
		listPerkembanganTags["TotalDeath"], listPerkembanganTags["Death"],
		listPerkembanganTags["TotalActive"], listPerkembanganTags["Active"],
	}
	dataCsv = append(dataCsv, title)

	for _, v2 := range v.ListPerkembangan {
		row := []string{
			v.Provinsi, libs.UnixToMyFormat(v2.Date),
			strconv.Itoa(v2.TotalCase), strconv.Itoa(v2.Case),
			strconv.Itoa(v2.TotalRecover), strconv.Itoa(v2.Recover),
			strconv.Itoa(v2.TotalDeath), strconv.Itoa(v2.Death),
			strconv.Itoa(v2.TotalActive), strconv.Itoa(v2.Active),
		}
		dataCsv = append(dataCsv, row)
	}

	return dataCsv
}

// ToChartjs ...
func (v FileItem) ToChartjs() libs.Chartjs {
	var data libs.Chartjs
	tags := v.GetTags("json")

	var item [4]libs.ChartjsDatasetsItem

	for _, v2 := range v.ListPerkembangan {
		data.Labels = append(data.Labels, libs.UnixToMyFormat(v2.Date))
		item[0].Data = append(item[0].Data, v2.Case)
		item[1].Data = append(item[1].Data, v2.Recover)
		item[2].Data = append(item[2].Data, v2.Death)
		item[3].Data = append(item[3].Data, v2.Active)
	}

	item[0].Label = tags["Case"]
	item[1].Label = tags["Recover"]
	item[2].Label = tags["Death"]
	item[3].Label = tags["Active"]

	item[0].BgColor = libs.ChartjsColor["case"]
	item[1].BgColor = libs.ChartjsColor["recover"]
	item[2].BgColor = libs.ChartjsColor["death"]
	item[3].BgColor = libs.ChartjsColor["active"]

	data.Datasets = append(data.Datasets, item[0])
	data.Datasets = append(data.Datasets, item[1])
	data.Datasets = append(data.Datasets, item[2])
	data.Datasets = append(data.Datasets, item[3])
	return data
}

// EmitICal ...
func (v FileItem) EmitICal() goics.Componenter {

	cal := goics.NewComponent()
	cal.SetType("VCALENDAR")
	cal.AddProperty("CALSCAL", "GREGORIAN")
	cal.AddProperty("PRODID;X-RICAL-TZSOURCE=TZINFO", "-//tmpo.io")
	cal.AddProperty("SUMMARY", "Covid-19 Province INDONESIA")

	for _, v3 := range v.ListPerkembangan {
		event := goics.NewComponent()
		event.SetType("VEVENT")

		event.AddProperty("UID", fmt.Sprintf("%s-%s@covid19.go.id", strings.Replace(v.Provinsi, " ", "_", -1), libs.UnixToMyFormat(v3.Date)))
		k4, v4 := goics.FormatDateField("DTEND", time.Unix(v3.Date/1000, 0))
		event.AddProperty(k4, v4)
		k4, v4 = goics.FormatDateField("DTSTART", time.Unix(v3.Date/1000, 0))
		event.AddProperty(k4, v4)
		event.AddProperty("X-FUNAMBOL-ALLDAY", "1")
		event.AddProperty("X-MICROSOFT-CDO-ALLDAYEVENT", "True")
		event.AddProperty("CLASS", "PUBLIC")
		desc := fmt.Sprintf(`%d(+%d) Cases
%d(+%d) Recovered Cases 
%d(+%d) Death Cases
%d(+%d) Active Cases`, v3.TotalCase, v3.Case,
			v3.TotalRecover, v3.Recover,
			v3.TotalDeath, v3.Death,
			v3.TotalActive, v3.Active,
		)
		event.AddProperty("DESCRIPTION", desc)
		event.AddProperty("SUMMARY", fmt.Sprintf("%s %d(+%d) Covid-19 Cases", v.Provinsi, v3.TotalCase, v3.Case))
		event.AddProperty("URL", "covid19.go.id")
		event.AddProperty("CONTACT", "covid19.go.id")
		event.AddProperty("TRANSP", "TRANSPARENT")

		k4, v4 = goics.FormatDateTimeField("CREATED", time.Unix(v3.Date/1000, 0))
		event.AddProperty(k4, v4)
		k4, v4 = goics.FormatDateTimeField("LAST-MODIFIED", time.Unix(v3.Date/1000, 0))
		event.AddProperty(k4, v4)
		k4, v4 = goics.FormatDateTimeField("DTSTAMP", time.Unix(v3.Date/1000, 0))
		event.AddProperty(k4, v4)
		event.AddProperty("LOCATION", fmt.Sprintf("%s - Indonesia", v.Provinsi))

		cal.AddComponent(event)
	}

	return cal
}