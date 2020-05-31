var div = document.createElement('div');
	div.id = "main";
	div.style = "background-color:#a3a9a9;display:flex;width: 100%;height:700px;padding-bottom: 50px;"
	document.getElementsByTagName('body')[0].appendChild(div);


var div2 = document.createElement('div');
	div2.id = "child";
	div2.style = "margin:auto;width: 550px;padding-bottom: 10px;background-color: white;box-shadow: 0 1px 6px 0 rgb(62, 42, 36);"
	document.getElementsByTagName('div')[0].appendChild(div2);

var div3 = document.createElement('div');
	div3.id = "head";
	div3.style = "background-color: #e06d6d;width: 100%;height: 150px;display: flex;justify-content: space-around;"
	document.getElementsByTagName('div')[1].appendChild(div3);


var div4 = document.createElement('div');
	div4.id = "prevdiv";
	div4.style = "margin: auto;"
	document.getElementsByTagName('div')[2].appendChild(div4);


var prbtn = document.createElement('button');
	prbtn.id = "prev";
	prbtn.style = "margin: auto;"
	prbtn.setAttribute("onclick","change('prev')");
	document.getElementsByTagName('div')[3].appendChild(prbtn).innerHTML = "Prev";

var div5 = document.createElement('div');
	div5.id = "today_date";
	div5.style = "margin: auto;"
	document.getElementsByTagName('div')[2].appendChild(div5);

var ptag = document.createElement('p');
	ptag.id = "crnt_month";
	ptag.style = "color: white;text-align: center;font-size: 37px;"
	document.getElementById('today_date').appendChild(ptag);

var spn1 = document.createElement('span');
	spn1.id = "crnt_day";
	spn1.style = "";
	document.getElementById('today_date').appendChild(spn1);

var spn2 = document.createElement('span');
	spn2.id = "crnt_date";
	spn2.style = "";
	document.getElementById('today_date').appendChild(spn2);

var spn3 = document.createElement('span');
	spn3.id = "crnt_month";
	spn3.style = "";
	document.getElementById('today_date').appendChild(spn3);

var spn4 = document.createElement('span');
	spn4.id = "crnt_year";
	spn4.style = "";
	document.getElementById('today_date').appendChild(spn4);

var nxtdiv = document.createElement('div');
	nxtdiv.id = "nxtdiv";
	nxtdiv.style = "margin: auto;"
	document.getElementsByTagName('div')[2].appendChild(nxtdiv);

var nxtbtn = document.createElement('button');
	nxtbtn.id = "next";
	nxtbtn.style = "margin: auto;"
	nxtbtn.setAttribute("onclick","change('next')");
	document.getElementById('nxtdiv').appendChild(nxtbtn).innerHTML = "Next";

var weekdiv = document.createElement('div');
	weekdiv.id = "week_days";
	weekdiv.style = "display: flex;width: 100%;padding-bottom: 10px;padding-top: 10px;background: #a5afaf;"
	document.getElementsByTagName('div')[1].appendChild(weekdiv);

var sundiv = document.createElement('div');
	sundiv.style = "width: 14.28%;text-align: center;font-weight: 800;"
	document.getElementById('week_days').appendChild(sundiv).innerHTML = "Sun";

var mondiv = document.createElement('div');
	mondiv.style = "width: 14.28%;text-align: center;font-weight: 800;"
	document.getElementById('week_days').appendChild(mondiv).innerHTML = "Mon";

var tuediv = document.createElement('div');
	tuediv.style = "width: 14.28%;text-align: center;font-weight: 800;"
	document.getElementById('week_days').appendChild(tuediv).innerHTML = "Tue";

var weddiv = document.createElement('div');
	weddiv.style = "width: 14.28%;text-align: center;font-weight: 800;"
	document.getElementById('week_days').appendChild(weddiv).innerHTML = "Wed";

var thrudiv = document.createElement('div');
	thrudiv.style = "width: 14.28%;text-align: center;font-weight: 800;"
	document.getElementById('week_days').appendChild(thrudiv).innerHTML = "Thru";


var fridiv = document.createElement('div');
	fridiv.style = "width: 14.28%;text-align: center;font-weight: 800;"
	document.getElementById('week_days').appendChild(fridiv).innerHTML = "Fri";

var satdiv = document.createElement('div');
	satdiv.style = "width: 14.28%;text-align: center;font-weight: 800;"
	document.getElementById('week_days').appendChild(satdiv).innerHTML = "Sat";


var daydiv = document.createElement('div');
	daydiv.id = "days";
	daydiv.className = "days";
	daydiv.style = "display: flex;flex-wrap: wrap;"
	document.getElementsByTagName('div')[1].appendChild(daydiv);



var dt = new Date();

function RenderDate(){

	var dchild = document.createElement('div');
		document.body.appendChild(dchild);
	
	var wname = ["Sunday ","Monday ", "Tuesday " , "Wednesday " , "Thrusday " , "Friday "  , "Saturday " ];
		document.getElementById('crnt_day').innerHTML = wname[dt.getDay()];

		document.getElementById('crnt_date').innerHTML = dt.getDate();
		

	var mname = ["January","February", "March" , "April" , "May" , "June" , "July" , "August" , "September" , "October" , "November" , "December"];
		document.getElementById('crnt_month').innerHTML = mname[dt.getMonth()];


		document.getElementById('crnt_year').innerHTML = dt.getFullYear();

	
	var lastdate = new Date(
		dt.getFullYear(),
		dt.getMonth() + 1, 
		0
		).getDate();
		dt.setDate(1);
	var crday = dt.getDay();




	var today = new Date();

	var dates = "";
		for(j = crday; j>0; j--){
		dates+= "<div>" + "" + "</div>"
	}
	for(i=1; i <= lastdate ; i++){
		if(i == today.getDate() && dt.getMonth() == today.getMonth()){
		dates+= "<div class='active'>" + i + "</div>";
		}else{
			dates+= "<div>" + i + "</div>";
		}
	}
		document.getElementsByClassName('days')[0].innerHTML = dates;
}

	function change(para){
		if(para == 'prev'){
			dt.setMonth(dt.getMonth() - 1);
		
		}else if(para == 'next'){
			dt.setMonth(dt.getMonth() + 1);
		}
		RenderDate();
	}


