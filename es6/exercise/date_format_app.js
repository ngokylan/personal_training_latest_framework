/*
Description:

Create an application that can read in pairs of dates in the following
format -

    DD MM YYYY, DD MM YYYY

Validate the input data, and compute the difference between the two dates
in days.

Output of the application should be of the form -

    DD MM YYYY, DD MM YYYY, difference

Where the first date is the earliest, the second date is the latest and the difference is the number of days.

Input can be from a file, or from standard input, as the developer chooses.

Provide test data to exercise the application.

Constraints:

The application may not make use of the platform / SDK libraries for date manipulation
(for example Date, Calendar classes).

The application can limit calculation on an input range of dates from 1900 to 2010


Deliverables:

The source files, the test data and any test code.

*/

let dates = [];
let is_valid_input = false;
// To store number of days in all months from January to Dec.
const cumDays = [0,31,59,90,120,151,181,212,243,273,304,334]; //cumulative Days by month
const leapcumDays = [0,31,60,91,121,152,182,213,244,274,305,335] // Cumulative Days by month

function DateObj(date){
	this.date = date;
}

DateObj.prototype.validate = function(){
	let is_valid = this.date.reduce(function(indexObject, dateElement){
			if(indexObject[0] === 0 ){//validate day DD
				if(dateElement.length <= 2){
					if(!isNaN(dateElement)){
						if(parseInt(dateElement) > 31 || parseInt(dateElement) < 1){
							indexObject[1] += `Day: ${dateElement} is out of range`;
						}
					}else{ 
						indexObject[1] += `Day: ${dateElement} is invalid`;
					}
				}else{ 
					indexObject[1] += `Day: ${dateElement} is invalid`;
				}
			}else if(indexObject[0] === 1 ){//validate month MM
				if(dateElement.length <= 2){
					if(!isNaN(dateElement)){
						if(parseInt(dateElement) > 12 || parseInt(dateElement) < 1){
							indexObject[1] += `Month: ${dateElement} is out of range`;
							
						}
					}else{ 
						indexObject[1] += `Month: ${dateElement} is invalid`;
					}
				}else{ 
					indexObject[1] += `Month: ${dateElement} is invalid`;
				}
			}else{//validate year YYYY
				if(dateElement.length === 4){
					if(!isNaN(dateElement)){
						if(parseInt(dateElement) > 2010 || parseInt(dateElement) < 1900){
							indexObject[1] += `Year: ${dateElement} is out of range`;
							
						}
					}else{ 
						indexObject[1] += `Year: ${dateElement} is invalid`;
					}
				}else{ 
					indexObject[1] += `Year: ${dateElement} is invalid`;
				}
			}
			indexObject[0]++;

			return indexObject;
		}, [0, ""]);
	return is_valid;	
};

function readInputDate(inputString){
	if(inputString.length > 0){
		//convert date from string format to object format
		let dateArray = inputString.split(' ');
		if(dateArray.length === 3){
			//instantiate Date object
			let dateObject = new DateObj(dateArray);
			//validate input
			let is_valid = dateObject.validate();
			
			//check output is_valid object
			if(is_valid[1] !== ""){
				is_valid[1];
				return false;
			}else{
				//calculate day number before adding to the array
				
				let month = (dateArray[1] + 9) % 12;
				let year = dateArray[2] - month / 10;
				let dayNumber = 365 * year + year / 4 - year / 100 + year / 400 + (month * 306 + 5)/10 + (dateArray[0] - 1);
				
				dateArray.push(dayNumber);

				dates.push({day: parseInt(dateArray[0]), month: parseInt(dateArray[1]), year: parseInt(dateArray[2]), dayNumber: parseInt(dateArray[3])});
				return true;
			}
		}
	}else{

		return false;
	}
}

// This function counts number of leap years before the
// given date
function isLeapYear(date)
{
    if (date.year%4 == 0){
        if (date.year%100 == 0){
            date.year%400 == 0? true : false;      
        }
        else
            return true;
    }else
        return false;
}

function dateDifferent(daterange){
	let totdays = 0;
	if(daterange[0].year === daterange[1].year){
		if(isLeapYear(daterange[0])){
			return (leapcumDays[daterange[1].month-1] + daterange[1].day) - (leapcumDays[daterange[0].month-1] + daterange[0].day);
        }else{
            return (cumDays[daterange[1].month-1] + daterange[1].day) - (cumDays[daterange[0].month-1] + daterange[0].day);
        }
		
	}
	if(isLeapYear(daterange[0]))
        totdays = totdays + 366 - (leapcumDays[daterange[0].month-1] + daterange[0].day);
    else
        totdays = totdays + 365 - (cumDays[daterange[0].month-1] + daterange[0].day);

    let year = daterange[0].year + 1;
    while(year < daterange[1].year){
        if(isLeapYear(year))
            totdays = totdays + 366;
        else
            totdays = totdays + 365;
        year = year + 1;
    }

    if(isLeapYear(daterange[1].year))
        totdays = totdays + (leapcumDays[daterange[1].month-1] + daterange[1].day);
    else
        totdays = totdays + (cumDays[daterange[1].month-1] + daterange[1].day);
    return totdays;
}

//dates;
//test case 1
let inputDates = ["30 10 2000", "1 11 2000"];
is_valid_input = inputDates.every(function(date){
	return readInputDate(date);
});
(is_valid_input) ? dateDifferent(dates): false;

//test case 2
inputDates = ["28 2 2000", "1 3 2000"];
is_valid_input = inputDates.every(function(date){
	return readInputDate(date);
});
(is_valid_input) ? dateDifferent(dates): false;

//test case 3
inputDates = ["30 12 2000", "2 1 2001"];
is_valid_input = inputDates.every(function(date){
	return readInputDate(date);
});
(is_valid_input) ? dateDifferent(dates): false;

/*
function to calculate Date Diff from input
*/
$("document").ready(function(){
	$("#btnCalculateDateDiff").on("click",function(){
		//reset global dates array
		dates = [];

		//collect input data
		let date1 = $("#txtDate1").val();
		let date2 = $("#txtDate2").val();

		//perform calculate number of days different
		is_valid_input = [date1, date2].every(function(date){
			return readInputDate(date);
		});
		if(is_valid_input){
			$("#lblResult").html(`The number of days difference is: ${dateDifferent(dates)} days`);
		}else{
			$("#lblResult").html("Invalid input format");
		} 
		//alert("Calculate is done");
	});
});
