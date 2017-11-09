const CLOUD = '*'
const AIRPORT = 'A'

const cloneArray = (array) => array.map(value => value.slice())
const flattenArray = (array) => array.reduce((flat, value) => flat.concat(value), [])

export default class CloudMap {
  constructor (values) {
    this.validateCloudMapValues(values)

    this.values = values
  }

  validateCloudMapValues (values) {
    if (this.getNumberOfOpenAirports(values) === 0) {
      throw new Error('It is necessary an airport at least!')
    }
    if (this.getNumberOfClouds(values) === 0) {
      throw new Error('It is necessary a cloud at least!')
    }
  }

  getNumberDaysUntilFirstAirportBeCoveredByCloud () {
    let mapOfBeginOfDay = cloneArray(this.values)

    let initialNumberOfOpenAirport = this.getNumberOfOpenAirports(mapOfBeginOfDay)
    let elapsedDays = 0

    while (initialNumberOfOpenAirport === this.getNumberOfOpenAirports(mapOfBeginOfDay)) {
      mapOfBeginOfDay = this.moveCloud(mapOfBeginOfDay)
      elapsedDays++
    }

    return elapsedDays
  }

  getNumberDaysUntilAllAirportsBeCoveredByCloud () {
    let mapOfBeginOfDay = cloneArray(this.values)

    let elapsedDays = 0

    while (this.getNumberOfOpenAirports(mapOfBeginOfDay) > 0) {
      mapOfBeginOfDay = this.moveCloud(mapOfBeginOfDay)
      elapsedDays++
    }

    return elapsedDays
  }

  getNumberOfOpenAirports (mapOfDay) {
    return flattenArray(mapOfDay).filter(value => value === AIRPORT).length
  }

  getNumberOfClouds (mapOfDay) {
    return flattenArray(mapOfDay).filter(value => value === CLOUD).length
  }

  moveCloud (mapOfBeginOfDay) {
    let mapOfEndOfDay = cloneArray(mapOfBeginOfDay)

    mapOfBeginOfDay.forEach((row, i) => {
      row.forEach((mapValue, j) => {
        if (mapOfBeginOfDay[i][j] !== CLOUD) {
          return
        }
        if (i > 0) {
          mapOfEndOfDay[i - 1][j] = CLOUD
        }
        if (i < mapOfBeginOfDay.length - 1) {
          mapOfEndOfDay[i + 1][j] = CLOUD
        }
        if (j > 0) {
          mapOfEndOfDay[i][j - 1] = CLOUD
        }
        if (j < mapOfBeginOfDay[i].length - 1) {
          mapOfEndOfDay[i][j + 1] = CLOUD
        }
      })
    })

    return mapOfEndOfDay
  }
}
