import CloudMap from './CloudMap'

export default class CloudMapParser {
  constructor (text) {
    this.text = text
  }

  toCloudMap () {
    const mapInput = this.removeEmptyLine(this.toCloudMapInput(this.removeWhitespace(this.text)))

    return new CloudMap(mapInput)
  }

  removeWhitespace (string) {
    return string.replace(/ +/g, '')
  }

  removeEmptyLine (array) {
    return array.reduce((prev, row) => {
      if (row.length > 0) {
        prev.push(row)
      }
      return prev
    }, [])
  }

  toCloudMapInput (string) {
    return string.split('\n').map(value => value.split(''))
  }
}
