console.log(spacetime('March 1 2012', 'America/New_York'))

const schedule = {
    "Meditation: the White Light": {
        IST: spacetime("2020-02-14 7:30AM", "Asia/Calcutta"),
        GMT: spacetime("2020-02-14 5:00PM", "Europe/London"),
        EST: spacetime("2020-02-14 12:00PM", "America/New_York"),
    },
    "Yoga - Empower Your Day":{
        IST: spacetime("2020-02-14 8:00AM", "Asia/Calcutta"),
        GMT: spacetime("2020-02-14 5:30PM", "Europe/London"),
        EST: spacetime("2020-02-14 12:30PM", "America/New_York"),
    },
   
    "Pujya Gyanvatsal Swami: ":{
        sessionName: "The Art of Spiritual Leadership",
        IST: spacetime("2020-02-14 9:45AM", "Asia/Calcutta"),
        GMT: spacetime("2020-02-14 7:15PM", "Europe/London"),
        EST: spacetime("2020-02-14 2:15PM", "America/New_York"),
    },
    "Shrimad Rajchandra Love and Care - A Showcase": {
        IST: spacetime("2020-02-14 11:30AM", "Asia/Calcutta"),
        GMT: spacetime("2020-02-14 9:00PM", "Europe/London"),
        EST: spacetime("2020-02-14 4:00PM", "America/New_York"),
    },
    "Akanksha Singh: ":{
        sessionName: 'Mindset of a Champion',
        IST: spacetime("2020-02-14 12:30PM", "Asia/Calcutta"),
        GMT: spacetime("2020-02-14 10:00PM", "Europe/London"),
        EST: spacetime("2020-02-14 5:00PM", "America/New_York"),
    },
    "Dr. Aditi Govitrikar: ": {
        sessionName: 'Stress Management',
        IST: spacetime("2020-02-14 12:45PM", "Asia/Calcutta"),
        GMT: spacetime("2020-02-14 9:00PM", "Europe/London"),
        GMT: spacetime("2020-02-14 10:15PM", "Europe/London"),
        EST: spacetime("2020-02-14 5:15PM", "America/New_York"),
    },
    "Pujya Gaur Gopal Das: ": {
        sessionName: 'Motivational Session',
        IST: spacetime("2020-02-14 1:30PM", "Asia/Calcutta"),
        GMT: spacetime("2020-02-14 8:00AM", "Europe/London"),
        EST: spacetime("2020-02-14 6:15PM", "America/New_York"),
    },
    "Kuntal Joisher:": {
        sessionName: "Climb your own Everest",
        IST: spacetime("2020-02-14 2:30PM", "Asia/Calcutta"),
        GMT: spacetime("2020-02-14 9:00AM", "Europe/London"),
        EST: spacetime("2020-02-14 7:15PM", "America/New_York"),
    },
    "Dean Idalene Kesner: ": {
        sessionName: "From Moment To Momentum",
        IST: spacetime("2020-02-14 3:00PM", "Asia/Calcutta"),
        GMT: spacetime("2020-02-14 9:30AM", "Europe/London"),
        EST: spacetime("2020-02-14 7:45PM", "America/New_York"),
    },
    "Ronnie Screwvala & Aarti Shah: ": {
        sessionName: "From Profits to Purpose",
        IST: spacetime("2020-02-14 4:00PM", "Asia/Calcutta"),
        GMT: spacetime("2020-02-14 10:30AM", "Europe/London"),
        EST: spacetime("2020-02-14 9:45PM", "America/New_York"),
    },
    "Barfi Bootcamp: ": {
        sessionName: "Fitness Workout",
        IST: spacetime("2020-02-14 4:45PM", "Asia/Calcutta"),
        GMT: spacetime("2020-02-14 11:15AM", "Europe/London"),
    },
    "BK Sister Shivani: ": {
        sessionName: "Being Love",
        IST: spacetime("2020-02-14 5:45PM", "Asia/Calcutta"),
        GMT: spacetime("2020-02-14 12:15PM", "Europe/London"),
        EST: spacetime("2020-02-14 8:45PM", "America/New_York"),
    
    },
    "Dr. Deepak Chopra: ": {
        sessionName: "The Soul of Leadership",
        IST: spacetime("2020-02-14 7:30PM", "Asia/Calcutta"),
        GMT: spacetime("2020-02-14 2:00PM", "Europe/London"),
        EST: spacetime("2020-02-14 9:00AM", "America/New_York"),
    },
    "Global Dedications": {
        IST: spacetime("2020-02-14 8:30PM", "Asia/Calcutta"),
        GMT: spacetime("2020-02-14 3:00PM", "Europe/London"),
        EST: spacetime("2020-02-14 10:00AM", "America/New_York"),
    },
    "Pujya Gurudevshri Rakeshbhai: ": {
        sessionName: "Key Note Address",
        IST: spacetime("2020-02-14 8:45PM", "Asia/Calcutta"),
        GMT: spacetime("2020-02-14 3:15PM", "Europe/London"),
        EST: spacetime("2020-02-14 10:15AM", "America/New_York"),
        
    },
    "Special Launch": {
        IST: spacetime("2020-02-14 9:30PM", "Asia/Calcutta"),
        GMT: spacetime("2020-02-14 4:00PM", "Europe/London"),
        EST: spacetime("2020-02-14 11:00AM", "America/New_York"),
    },
    "Culture Carnival": {
        sessionName: "by Leading Artists such as <b>Kailash Kher, Radhika Sood Nayak, Indira Naik & Neeraj Arya's Kabir Cafe</b>",
        IST: spacetime("2020-02-14 9:45PM", "Asia/Calcutta"),
        GMT: spacetime("2020-02-14 4:15PM", "Europe/London"),
        EST: spacetime("2020-02-14 11:15AM", "America/New_York"),
    },
    "breakout-1":{
        breakout: true,
        sessionName: "Breakout Sessions* (2 Back to Back)",
        IST: spacetime("2020-02-14 8:45AM", "Asia/Calcutta"),
        GMT: spacetime("2020-02-14 6:15PM", "Europe/London"),
        EST: spacetime("2020-02-14 1:15PM", "America/New_York"),
    },
    "breakout-2":{
        breakout: true,
        sessionName: "Breakout Session",
        IST: spacetime("2020-02-14 11:00AM", "Asia/Calcutta"),
        GMT: spacetime("2020-02-14 8:30PM", "Europe/London"),
        EST: spacetime("2020-02-14 3:30PM", "America/New_York"),
    },
    "breakout-3":{
        breakout: true,
        sessionName: "Breakout Session",
        IST: spacetime("2020-02-14 12:00PM", "Asia/Calcutta"),
        GMT: spacetime("2020-02-14 9:30PM", "Europe/London"),
        EST: spacetime("2020-02-14 4:30PM", "America/New_York"),
    },
    "breakout-4":{
        breakout: true,
        sessionName: "Break / Exhibition Time",
        IST: spacetime("2020-02-14 1:15PM", "Asia/Calcutta"),
        EST: spacetime("2020-02-14 5:45PM", "America/New_York"),
    },
    "breakout-5":{
        breakout: true,
        sessionName: "Breakout Session",
        IST: spacetime("2020-02-14 2:00PM", "Asia/Calcutta"),
        GMT: spacetime("2020-02-14 8:30AM", "Europe/London"),
        EST: spacetime("2020-02-14 6:45PM", "America/New_York"),
    },
    "breakout-6":{
        breakout: true,
        sessionName: "Breakout Session",
        IST: spacetime("2020-02-14 3:30PM", "Asia/Calcutta"),
        GMT: spacetime("2020-02-14 10:00AM", "Europe/London"),
        EST: spacetime("2020-02-14 8:15PM", "America/New_York"),
    },
    "breakout-7":{
        breakout: true,
        sessionName: "Break / Exhibition Time",
        IST: spacetime("2020-02-14 4:30PM", "Asia/Calcutta"),
        GMT: spacetime("2020-02-14 11:00AM", "Europe/London"),
        EST: spacetime("2020-02-14 9:30PM", "America/New_York"),
    },
    "breakout-8":{
        breakout: true,
        sessionName: "Breakout Session",
        IST: spacetime("2020-02-14 6:30PM", "Asia/Calcutta"),
        GMT: spacetime("2020-02-14 1:00PM", "Europe/London"),
        EST: spacetime("2020-02-14 8:00AM", "America/New_York"),
    },
}

//const timezone = "EST";

function getInnerCode(event, eventName, timezone) {
    return `
    <div class="row schedule-item">
        <div class="col-md-2"><time>${event[timezone].time()}</time></div>
        <div class="col-md-10">
            <h4><b>${eventName}</b> ${event.sessionName !== undefined ? event.sessionName : ''}</h4>
            </div>
        </div>
    </div>
    `;
}
function getInnerBreakoutCode(event, eventName, timezone) {
    return `
    <div class="row schedule-item">
        <div class="col-md-2"><time>${event[timezone].time()}</time></div>
        <div class="col-md-10">
            <h4 class="pink">${event.sessionName !== undefined ? event.sessionName : ''}</h4>
            </div>
        </div>
    </div>
    `;
}



// const formattedSchedule = Object.keys(schedule).filter( x => !!schedule[x][timezone])
// .sort( (a, b) => {
//     const eventA = schedule[a];
//     const eventB = schedule[b];
//     return eventA[timezone].epoch - eventB[timezone].epoch;
// }).reduce( (acc, eventName) => {
//     console.log('acc', acc);
//     const event = schedule[eventName];
//     let innerCode;
//     if(event.breakout){
//         innerCode = getInnerBreakoutCode(event, eventName);
//     }
//     else{
//         innerCode = getInnerCode(event, eventName);
//     }
//     acc = acc + innerCode
//     //acc.push(innerCode);
//     console.log(acc);
//     return acc;
// }, '');

function getFormattedSchedule(timezone) { 
    return Object.keys(schedule).filter( x => !!schedule[x][timezone])
        .sort( (a, b) => {
            const eventA = schedule[a];
            const eventB = schedule[b];
            return eventA[timezone].epoch - eventB[timezone].epoch;
        }).reduce( (acc, eventName) => {
            console.log('acc', acc);
            const event = schedule[eventName];
            let innerCode;
            if(event.breakout){
                innerCode = getInnerBreakoutCode(event, eventName, timezone);
            }
            else{
                innerCode = getInnerCode(event, eventName, timezone);
            }
            acc = acc + innerCode
            return acc;
        }, '');
}

function getNewSchedule(currentTimezone, relativeTimeZone){
    return Object.keys(schedule).filter( x => !!schedule[x][relativeTimeZone]).reduce((acc, eventName) => {
         const event = schedule[eventName];
         event.mytz = event[relativeTimeZone].goto(currentTimezone);
         acc[eventName] = event;
         return acc
     }, {})
 }

function getYourTimezone(){
    const currentTimezone = spacetime().timezone().name;
    let newSchedule;
    if(currentTimezone.includes('America')){
        newSchedule = getNewSchedule(currentTimezone, 'EST')
    }
    else if(currentTimezone.includes('Europe')){
        newSchedule = getNewSchedule(currentTimezone, 'GMT')
    }
    else{
        newSchedule = getNewSchedule(currentTimezone, 'IST')
    }

    return getFormattedSchedule('mytz');
}


document.getElementById('add-schedule').innerHTML = getYourTimezone();
document.getElementById('est').innerHTML = getFormattedSchedule('EST');
document.getElementById('ist').innerHTML = getFormattedSchedule('IST');
document.getElementById('gmt').innerHTML = getFormattedSchedule('GMT');
