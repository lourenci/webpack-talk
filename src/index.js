const parser = CloudMapParser
document.getElementById('solve-it').addEventListener('click', () => solveUsingParser(parser))

function solveUsingParser (Parser) {
  const mapInputValue = document.getElementById('mapInput').value
  if (mapInputValue.length === 0) {
    return
  }

  const parser = new Parser(mapInputValue)
  try {
    const map = parser.toCloudMap()

    document.getElementById('result').innerHTML = '<br>Dias para o primeiro aeroporto ser coberto: <b>' + map.getNumberDaysUntilFirstAirportBeCoveredByCloud() + '</b>'
    document.getElementById('result').innerHTML += '<br>Dias para todos os aeroportos serem cobertos: <b>' + map.getNumberDaysUntilAllAirportsBeCoveredByCloud() + '</b>'
  } catch (e) {
    window.alert(e)
  }
}
