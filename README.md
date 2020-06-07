Indonesia COVID-19 Data

- [Usage](#usage)
  - [CSV](#csv)
    - [Update Harian](#update-harian)
    - [Provinsi Harian](#provinsi-harian)
    - [Zona Rawan Kecamatan](#zona-rawan-kecamatan)
  - [ICalendar / ICS](#icalendar--ics)
    - [Update Harian](#update-harian-1)
    - [Provinsi Harian](#provinsi-harian-1)
- [Powered by](#powered-by)

Download the latest releases on [releases](https://github.com/aiosk/covid19Idn/releases) according to your OS,

or build your self



```sh
$ go build
```
this put executable file in current directory

or install your self
```sh
$ go install
```
this put executable file in `~/go/bin`

# Usage
## CSV
To output CSV format
### Update Harian
```sh
$ curl --compressed "https://data.covid19.go.id/public/api/update.json?_=$(date +%s)" |
/path/to/file/covid19Idn update > dist/update.csv
```

### Provinsi Harian
```sh
curl --compressed "https://data.covid19.go.id/public/index.html?_=$(date +%s)" |
/path/to/file/covid19Idn prov | xargs -i echo "https://data.covid19.go.id/public/api/prov_detail_{}.json?_=$(date +%s)" |
parallel -k curl --compressed {} | paste -sd',' | sed 's/.*/[&]/' |
/path/to/file/covid19Idn provdetail > dist/prov.csv
```

### Zona Rawan Kecamatan
```sh
curl --compressed -H "User-Agent:okhttp/3.12.1" \
"https://api-rdt-v2.bersatulawancovid.id/dev/location/all_rawan?_=$(date +%s)" |
/path/to/file/covid19Idn rawan > dist/rawan.csv
```

## ICalendar / ICS
To output in ICS format
### Update Harian
```sh
$ curl --compressed "https://data.covid19.go.id/public/api/update.json?_=$(date +%s)" |
/path/to/file/covid19Idn update -ics > dist/update.ics
```

### Provinsi Harian
```sh
$ curl --compressed "https://data.covid19.go.id/public/index.html?_=$(date +%s)" |
/path/to/file/covid19Idn prov | xargs -i echo "https://data.covid19.go.id/public/api/prov_detail_{}.json?_=$(date +%s)" |
parallel -k sh -c \"curl --compressed {}\;echo\" | paste -sd',' | sed 's/.*/[&]/' |
/path/to/file/covid19Idn provdetail -ics > dist/prov.ics
```

# Powered by
- [covid19.go.id](https://covid19.go.id/peta-sebaran)

  Informasi terbaru seputar penanganan COVID-19 di Indonesia oleh Pemerintah

  Gugus Tugas Percepatan Penanganan COVID-19
- [bersatulawancovid.id](https://www.bersatulawancovid.id/)

  Mari bersatu lawan COVID-19

  GUGUS TUGAS PERCEPATAN PENANGANAN COVID-19

- [github.com/cahyadsn/wilayah](https://github.com/cahyadsn/wilayah)

  Kode dan Data Wilayah Administarsi Indonesia sesuai Permendagri No 72 Tahun 2019