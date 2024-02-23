document.addEventListener("DOMContentLoaded", function () {
  var table = document.getElementById("example");
  var dataTable = new DataTable(table, {
    fnInfoCallback: function (oSettings, iStart, iEnd, iMax, iTotal, sPre) {
      return "Page " + iStart + " of " + iEnd;
    },
    responsive: true,
    paging: true,
    ordering: false,
    columnDefs: [
      {
        orderable: false,
        targets: "no-sort",
      },
    ],
    info: true,
    lengthChange: false,
    pageLength: 5,
    searching: false,

    // dom: '<"bottom"ilp>',
    initComplete: function () {
      var paginate = document.querySelector(".dataTables_paginate");
      if (paginate) {
        paginate.style.textAlign = "center";
      }
    },
  });
});
