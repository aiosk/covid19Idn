package libs

import "log"

// PanicError ...
func PanicError(err error) {
	if err != nil {
		panic(err)
	}

}

// FatalError ...
func FatalError(message string, err error) {
	if err != nil {
		log.Fatalln(message, err)
	}
}
