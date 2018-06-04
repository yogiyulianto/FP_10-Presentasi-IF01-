$('#calendar').fullCalendar({

  events: [
    {
      title  : 'Pelatihan Android',
      start  : '2018-06-21'
    },
    {
      title  : 'Pelatihan Sistem',
      start  : '2018-06-25'
    },
    {
      title  : 'Pelatihan Software',
      start  : '2018-07-07'
    },
    {
      title  : 'Pelatihan Android',
      start  : '2018-07-21'
    },
    {
      title  : 'Pelatihan Hardware',
      start  : '2018-08-21'
    },
    {
      title  : 'Pelatihan Analisis',
      start  : '2018-08-21'
    },

  ],
  eventClick: function(event, element) {

    window.location = "detail_pelatihan.html"
  }
});
