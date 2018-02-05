function calDok(){
  var input = document.getElementById("input").value;
  var result;

  if(input<=10000000) result=0;
  // 맨 처음 if문에 result=0; 을 안썼더니 calDok() 함수가 정의되지 않았다는 오류가 뜸.
  else if(input<=50000000) result=(input-10000000)*7/10000;
  else if(input<=200000000) result=28000+(input-50000000)*6/10000;
  else if(input<=500000000) result=118000+(input-200000000)*5/10000;
  else if(input<=1000000000) result=268000+(input-500000000)*4/10000;
  else result=468000+(input-1000000000)/10000;
  result=result+100000;

  document.getElementById("output").value=result;
}

function addRow(){    // 행 추가 함수
  var newRow = myTable.insertRow(myTable.rows.length);
  for(var i=0; i<document.getElementsByTagName('th').length; i++){
     var newCell = newRow.insertCell(i);
     if(i==0) newCell.innerHTML=newRow.rowIndex;
     else if(i==1){
       newCell.innerHTML="<input type='text' name='start'>";
     }else if(i==2){
          // 아래 행에서 myTable이 아닌 table이나 newRow를 사용하면 에러 발생...
       newCell.innerHTML="<input type='text' name='end' onblur='myTable.rows[parentNode.parentNode.rowIndex+1].cells[1].childNodes.item(0).value=addDate(this.value)'>";




     }else newCell.innerHTML="<input type='text'></input>";
  }
}

function addDate(val){
  var myDate = new Date(val);
  var dayOfMonth = myDate.getDate();
  myDate.setDate(dayOfMonth+1);
  var m = myDate.getMonth()+1;
  return myDate.getFullYear() + "-" + m + "-" + myDate.getDate();
}
