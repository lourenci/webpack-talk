document.getElementById('solve-it').addEventListener('click', solve)

function solve () {
  const mapInputValue = document.getElementById('mapInput').value
  if (mapInputValue.length === 0) {
    return
  }

  const parser = new CloudMapParser(mapInputValue)
  try {
    const map = parser.toCloudMap()

    document.getElementById('result').innerHTML = '<br>Dias para o primeiro aeroporto ser coberto: <b>' + map.getNumberDaysUntilFirstAirportBeCoveredByCloud() + '</b>'
    document.getElementById('result').innerHTML += '<br>Dias para todos os aeroportos serem cobertos: <b>' + map.getNumberDaysUntilAllAirportsBeCoveredByCloud() + '</b>'
  } catch (e) {
    window.alert(e)
  }
}
