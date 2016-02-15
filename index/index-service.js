var BASES = (process.env.BASES || process.argv[2] || '').split(',')

require('seneca')({
  tag:'index',
  //log:'all'
})
  .use('index-logic')
  .use('mesh',{
    pin: 'search:*', 
    bases: BASES
  })
