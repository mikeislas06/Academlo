const APIURL = "https://opentdb.com/api.php?amount=10";

getQuestions(APIURL);

async function getQuestions(url) {
  const resp = await fetch(url);
  const respData = await resp.json();

  console.log(respData.results);
}
