﻿WpfWindow("Micro Focus MyFlight Sample").WpfComboBox("fromCity").Select DataTable("p_FlightFrom", dtLocalSheet) @@ hightlight id_;_1958781272_;_script infofile_;_ZIP::ssf3.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfComboBox("toCity").Select DataTable("p_FlightTo", dtLocalSheet) @@ hightlight id_;_1958781800_;_script infofile_;_ZIP::ssf5.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfCalendar("datePicker").SetDate "4-Sep-2033" @@ hightlight id_;_1958782280_;_script infofile_;_ZIP::ssf6.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfComboBox("Class").Select "Business" @@ hightlight id_;_1958781944_;_script infofile_;_ZIP::ssf8.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfComboBox("numOfTickets").Select "2" @@ hightlight id_;_1958781464_;_script infofile_;_ZIP::ssf11.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfButton("FIND FLIGHTS").Click @@ hightlight id_;_1958781368_;_script infofile_;_ZIP::ssf12.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfTable("flightsDataGrid").SelectCell 2,0 @@ hightlight id_;_1958775896_;_script infofile_;_ZIP::ssf13.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfButton("SELECT FLIGHT").Click @@ hightlight id_;_1997139744_;_script infofile_;_ZIP::ssf14.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfEdit("passengerName").Set DataTable("p_AgentName", dtGlobalSheet) @@ hightlight id_;_1997141616_;_script infofile_;_ZIP::ssf15.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfButton("ORDER").Click @@ hightlight id_;_1997150544_;_script infofile_;_ZIP::ssf16.xml_;_
wait 5
WpfWindow("Micro Focus MyFlight Sample").WpfObject("Order 182 completed").Check CheckPoint("Order completed")
WpfWindow("Micro Focus MyFlight Sample").WpfObject("Order 182 completed").Output CheckPoint("OutputOrderNumber")
WpfWindow("Micro Focus MyFlight Sample").WpfButton("NEW SEARCH").Click
 @@ hightlight id_;_1997151744_;_script infofile_;_ZIP::ssf17.xml_;_
