function reqListener() {
  PageData = JSON.parse(this.response);

  //Contributor Of The Month
  var cotmElem = document.querySelector('.cotm');
  var cotmName = document.createElement('h5');
  cotmName.textContent = PageData.COTM.Name;
  cotmElem.appendChild(cotmName);
  var cotmImg = document.createElement('img');
  cotmImg.src = "img/" + PageData.COTM.Img;
  cotmImg.className = "cotm-propic";
  cotmElem.appendChild(cotmImg);
  var cotmDetails = document.createElement('p');
  cotmDetails.className = "cotm-details";
  cotmDetails.textContent = PageData.COTM.Details;
  cotmElem.appendChild(cotmDetails);

  //Latest News Block
  var NewsElem = document.querySelector('.big-news');
  var NewsName = document.createElement('h3');
  NewsName.className = "news-title";
  NewsName.textContent = PageData.LatestNews.Title;
  NewsElem.appendChild(NewsName);

  var NewsDetails = document.createElement('p');
  NewsDetails.className = "news-details";
  NewsDetails.textContent = PageData.LatestNews.Details;
  NewsElem.appendChild(NewsDetails);

  //Content Block 1
  var Block1Elem = document.querySelector('.block1');
  var Block1Name = document.createElement('h3');
  Block1Name.className = "news-title";
  Block1Name.textContent = PageData.Block1.Title;
  Block1Elem.appendChild(Block1Name);

  var Block1Details = document.createElement('p');
  Block1Details.className = "news-details";
  Block1Details.textContent = PageData.Block1.Details;
  Block1Elem.appendChild(Block1Details);

  //Content Block 2
  var Block2Elem = document.querySelector('.block2');
  var Block2Name = document.createElement('h4');
  Block2Name.className = "news-title";
  Block2Name.textContent = PageData.Block2.Title;
  Block2Elem.appendChild(Block2Name);

  var Block2Details = document.createElement('p');
  Block2Details.className = "news-details";
  Block2Details.textContent = PageData.Block2.Details;
  Block2Elem.appendChild(Block2Details);

  //Content Block 3
  var Block3Elem = document.querySelector('.block3');
  var Block3Name = document.createElement('h4');
  Block3Name.className = "news-title";
  Block3Name.textContent = PageData.Block3.Title;
  Block3Elem.appendChild(Block3Name);

  var Block3Details = document.createElement('p');
  Block3Details.className = "news-details";
  Block3Details.textContent = PageData.Block3.Details;
  Block3Elem.appendChild(Block3Details);

  //Content Block 4
  var Block4Elem = document.querySelector('.block4');
  var Block4Name = document.createElement('h4');
  Block4Name.className = "news-title";
  Block4Name.textContent = PageData.Block4.Title;
  Block4Elem.appendChild(Block4Name);

  var Block4Details = document.createElement('p');
  Block4Details.className = "news-details";
  Block4Details.textContent = PageData.Block4.Details;
  Block4Elem.appendChild(Block4Details);



}

function reqListenerTwo(){
  ContributeData = JSON.parse(this.response);

  //Contributor Element Loop List
  for(i = 0; i < ContributeData.length; i++){
    var contributorElem = document.getElementById('contributor-elem');
    var contributorDiv = document.createElement('div');
    contributorDiv.className = "contributors hover grid-33";

    var contributorImg = document.createElement('img');
    contributorImg.className = "contributors-propic";
    contributorImg.src = "img/" + ContributeData[i].Img;
    contributorDiv.appendChild(contributorImg);

    var contributorName = document.createElement('h5');
    contributorName.className = "contributors-name";
    contributorName.textContent = ContributeData[i].Name;
    contributorDiv.appendChild(contributorName);

    var contributorText = document.createElement('p');
    contributorText.className = "contributors-text";
    contributorText.textContent = ContributeData[i].Details;
    contributorDiv.appendChild(contributorText);

    contributorElem.appendChild(contributorDiv);

  }
}

var oReq = new XMLHttpRequest();
oReq.onload = reqListener;
oReq.open("GET", "data.json");
oReq.overrideMimeType("application/json");
oReq.send();

var pReq = new XMLHttpRequest();
pReq.onload = reqListenerTwo;
pReq.open("GET", "contributors.json");
pReq.overrideMimeType("application/json");
pReq.send();
