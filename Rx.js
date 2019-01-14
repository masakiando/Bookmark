var button = document.querySelector('button');
/* ***********************************************
  ******  Rx.Observable  *********** 
 ************************************************/
const obsE = Rx.Observable;
/* ***********************************************
  ******  observer  *********** 
 ************************************************/
const obsR = {
    next: function (value) { console.log(value) },
    error: function (error) { console.log(error) },
    complete: function (value) { console.log('Completed') }
}

const obsR_B = {
    next: function (value) { console.log(value) }
}

/* obsE.fromEvent(button, 'click')
  .subscribe( value => console.log(value.clientX) ); */

/* obsE.fromEvent(button, 'mousemove')
  .subscribe( valur => console.log('hello onMouseOver') ); */

/* ***********************************************
  ******  Static Public Methods create *********** 
 ************************************************/
/* obsE.fromEvent(button, 'dblclick') */
const subscriptionC = obsE.create(obs => {
    /* obs.error('Error'); */
    /*   obs.next('A value');
      setTimeout(function(){
        obs.next('A second value')
        obs.complete();
      },2000); */
    button.onclick = event => { obs.next(event) }
}).subscribe(obsR);

setTimeout(() => { subscriptionC.unsubscribe() }, 10000)

/* ***********************************************
  ******  Static Public Methods interval ********* 
 ************************************************/
const subscriptionI = obsE.interval(1000)
    .map(value => { return 'Number' + value })
    .throttleTime(2000)
    .subscribe(obsR);

setTimeout(() => { subscriptionI.unsubscribe() }, 10000)

/* ***********************************************
  ******  Rx.Subject  *********** 
 ************************************************/
const subT = new Rx.Subject();

subT.subscribe(obsR);
subT.subscribe(obsR_B);
subT.next('A new data piece');
subT.complete();
subT.next('New value'); // No call




















