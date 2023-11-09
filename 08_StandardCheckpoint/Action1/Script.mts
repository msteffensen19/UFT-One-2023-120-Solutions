WpfWindow("Micro Focus MyFlight Sample").WpfComboBox("fromCity").Select "Denver" @@ hightlight id_;_1972964088_;_script infofile_;_ZIP::ssf4.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfComboBox("toCity").Select "Frankfurt" @@ hightlight id_;_1964929808_;_script infofile_;_ZIP::ssf8.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfCalendar("datePicker").SetDate "4-Sep-2033" @@ hightlight id_;_1964932976_;_script infofile_;_ZIP::ssf9.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfComboBox("Class").Select "Business" @@ hightlight id_;_1964933408_;_script infofile_;_ZIP::ssf12.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfComboBox("numOfTickets").Select "2" @@ hightlight id_;_1964932640_;_script infofile_;_ZIP::ssf16.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfButton("FIND FLIGHTS").Click @@ hightlight id_;_1964879840_;_script infofile_;_ZIP::ssf17.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfTable("flightsDataGrid").SelectCell 2,0 @@ hightlight id_;_1964890304_;_script infofile_;_ZIP::ssf18.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfButton("SELECT FLIGHT").Click @@ hightlight id_;_1964935904_;_script infofile_;_ZIP::ssf19.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfEdit("passengerName").Set "John Jackson"
WpfWindow("Micro Focus MyFlight Sample").WpfButton("ORDER").Click
If  WpfWindow("Micro Focus MyFlight Sample").WpfObject("Order completed").Exist (6) Then
    WpfWindow("Micro Focus MyFlight Sample").WpfObject("Order completed").Check CheckPoint("Order completed")	
End If
WpfWindow("Micro Focus MyFlight Sample").WpfButton("NEW SEARCH").Click @@ hightlight id_;_2142876408_;_script infofile_;_ZIP::ssf34.xml_;_

