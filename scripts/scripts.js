
// start -> TV -> shrooms -> door -> phone -> end

const data = {
    "start" : {
        "is_back" : false,
        "forward" : "tv1",
        "div_class" : "items",
        "div_id" : "start",
        "html" :
        `
        <img class="start" src="images/start/bg.png">
        <img class="start" src="images/start/ground.png">
        <img class="start" src="images/start/house.png">
        <img class="start" src="images/start/trees.png">
        <img class="start" src="images/start/window.png">
        <img id="contain" class="start warning" src="images/start/contain.png">
        <img id="warn" class="start warning" src="images/start/warn.png">
        `
    },
    "tv1" : {
        "is_back" : false,
        "forward" : "shrooms1",
        "back" : "tv2",
        "div_class" : "items",
        "div_id" : "tv1",
        "html" :
        `
        <img class="present" src="images/tv/tv-bg.png">
        <img class="present" src="images/tv/table.png">
        <img class="present" src="images/tv/girls.png">
        `
    },
    "tv2" : {
        "is_back" : true,
        "forward" : "shrooms1",
        "div_class" : "items",
        "div_id" : "tv2",
        "html" :
        `
        <img src="images/white_bg.png">
        <img id="tv2-bg" class="hidden" src="images/tv/bg.png">
        <img id="car" class="hidden" src="images/tv/car.png">
        `
    },
    "shrooms1" : {
        "is_back" : false,
        "forward" : "door1",
        "back" : "shrooms2",
        "div_class" : "items",
        "div_id" : "shrooms1",
        "html" :
        `
        <img class="present" src="images/shrooms/stove.png">
        <img class="present" src="images/shrooms/cutting.png">
        `
    },
    "shrooms2" : {
        "is_back" : true,
        "forward" : "door1",
        "div_class" : "items",
        "div_id" : "shrooms2",
        "html" :
        `
        <img id="mushrooms" class="shrooms" src="images/shrooms/shrooms.png">
        <img id="table" class="shrooms hidden" src="images/shrooms/table.png">
        <img id="toilet" class="hidden" src="images/shrooms/toilet.png">
        <img id="bendu" class="shrooms hidden" src="images/shrooms/bendu.png">
        <img id="bendl" class="hidden" src="images/shrooms/bendl2.png">
        <img id="vom" class="hidden" src="images/shrooms/vom.png">
        <img id="static1" class="shrooms hidden" src="images/static_more.gif">
        <img id="static2" class="shrooms hidden" src="images/static_lots.gif">
        `
    },
    "door1" : {
        "is_back" : false,
        "forward" : "phone1",
        "back" : "door2",
        "div_class" : "items",
        "div_id" : "door1",
        "html" :
        `
        <img class="door present" src="images/door/door-bg.png">
        <img id="f_door" class="door present" src="images/door/door-door.png">
        <img class="door present" src="images/door/door-laptop.png">
        <img class="door present" src="images/door/light.png">
        `
    },
    "door2" : {
        "is_back" : true,
        "forward" : "phone1",
        "div_class" : "items",
        "div_id" : "door2",
        "html" :
        `
        <img src="images/white_bg.png">
        <img id="static" class="hidden" src="images/static_lots.gif">
        <img class="door" src="images/door/doorb-bg2.gif">
        <img id="b_door" class="door" src="images/door/doorb-door.png">
        <img id="b_girl" class="door" src="images/door/doorb-girlo.png">
        <img id="kick" class="door hidden" src="images/door/kick.gif">
        <img id="squint" class="door hidden" src="images/door/doorb-girlc.png">
        `
    },
    "phone1" : {
        "is_back" : false,
        "forward" : "end1",
        "back" : "phone2",
        "div_class" : "items",
        "div_id" : "phone1",
        "html" :
        `
        <img class="phone present" src="images/phone/bg.png">
        <img class="phone present" src="images/phone/sink.png">
        <img class="phone present" src="images/phone/phone.png">
        <img class="phone present" src="images/phone/drop.png">
        `
    },
    "phone2" : {
        "is_back" : true,
        "forward" : "end1",
        "div_class" : "items",
        "div_id" : "phone2",
        "html" :
        `
        <img src="images/white_bg.png">
        <img class="phone" src="images/phone/shelf.png">
        <img class="phone" src="images/phone/hall.png">
        <img class="phone" src="images/phone/small.png">
        <img id="f22" class="hidden" src="images/phone/f22.png">
        <img id="f22g" class="hidden" src="images/phone/f22g.png">
        <img id="b2" class="hidden" src="images/phone/b2.png">
        <img id="b2g" class="hidden" src="images/phone/b2g.png">
        <img id="d2" class="hidden" src="images/phone/d2.png">
        <img id="d2g" class="hidden" src="images/phone/d2g.png">
        `
    },
        "end1" : {
        "is_back" : false,
        "forward" : "end3",
        "back" : "end2",
        "div_class" : "items",
        "div_id" : "end1",
        "html" :
        `
        <img class="end1 present" src="images/end/bg.png">
        <img class="end1 present" src="images/end/table.png">
        <img class="end1 present" src="images/end/ipad.png">
        <img class="end1 present" src="images/end/mom.png">
        <img id="bubble" class="end1 present" src="images/end/bubble.png">
        <img id="q" class="end1 present hidden" src="images/end/q.png">
        `
    },
        "end2" : {
        "is_back" : true,
        "div_class" : "items",
        "div_id" : "end2",
        "html" :
        `
        <img id="hl" class="end2 hand" src="images/end/hl.png">
        <img id="overwhelm" class="end2" src="images/end/overwhelm.png">
        <img id="hr" class="end2 hand" src="images/end/hr.png">        
        `
    },
        "end3" : {
        "is_back" : false,
        "div_class" : "items",
        "div_id" : "end3",
        "html" :
        `
        <img id="overwhelmb" class="end3 hidden" src="images/end/overwhelm.png">
        `
    },
};

// 5 plain white, 3 wont go back then overwhelm, 4 cant go back then overwhelm

// Globals
var times_back = 0;
const good_end = [2, 3];
var forward_difference = 0;
var made_it_through = true;
var load_done = false;
var intervals = [];
var timeouts = [];
const wrapper = document.getElementById("item-wrap");
const upper_wrapper = document.getElementById("proj3-cont");
const black_screen = document.getElementById("black-screen");
const black_bg = document.getElementById("black-bg");
const forward_btn = document.getElementById("forward");
const r_forward_btn = document.getElementById("r_forward");
const back_btn = document.getElementById("back");
var back_btn_up = false;

// Audio
// Back Audio
const droneAudio = new Audio("audio/droningL.mp3");
droneAudio.loop = true;
const memoryAudio = new Audio("audio/memory_Lately_kind_of_yeah.mp3");
memoryAudio.loop = true;
const androidAudio = new Audio("audio/living_dead_androids.mp3");
androidAudio.loop = true;
// Sound effects
const rainAudio = new Audio("audio/rain.wav");
rainAudio.loop = true;
const smashAudio = new Audio("audio/smash.wav");
const knockAudio = new Audio("audio/knocking.mp3");
const back_audio = [droneAudio, 
                    memoryAudio, 
                    rainAudio, 
                    smashAudio, 
                    knockAudio, 
                    androidAudio];
// Forward audio
const healingAudio = new Audio("audio/The_Healing_Sergey_Cheremisinov.mp3");
healingAudio.loop = true;
const stringsAudio = new Audio("audio/cdc2_Kosta_T.mp3");
stringsAudio.loop = true;

const forward_audio = [healingAudio, stringsAudio];
var forward_playing_audio = [];

// Keep track of id current set
// Set this to whatever id you cant for testing
var current_set_id = "start";

function start () {
    var total_wait;
    addHTML(wrapper, data[current_set_id]);
    if (current_set_id == "start") {
        var contain_wait = 500;
        var warn_wait = 2500;
        var btn_wait = 3500;
        total_wait = contain_wait + warn_wait + btn_wait
        setTimeout(() => {
            document.getElementById("contain").style.transform = "translateY(100vh)";
            document.getElementById("contain").style.opacity = 1;
            setTimeout(() => {
                document.getElementById("warn").style.transform = "translateY(100vh)";
                document.getElementById("warn").style.opacity = 1;
                setTimeout(() => {
                    forward_btn.style.transform = "translateY(-20vw)"
                    forward_btn.style.transition = "opacity 4s, margin-bottom 1s,"
                }, btn_wait);
            }, warn_wait);
        }, contain_wait);
    
    }
    else {
        total_wait = 4000;
        slideEles(document.getElementById(current_set_id), 300, -150);
        forward_btn.style.transform = "translateY(-20vw)"
        forward_btn.style.transition = "opacity 4s, margin-bottom 1s,"
        back_btn.style.transform = "translateY(-20vw)"
        back_btn.style.transition = "opacity 4s, margin-bottom 1s,"
    }

    r_forward_btn.style.transform = "translateY(-20vw)"
    r_forward_btn.style.transition = "opacity 4s, margin-bottom 1s,"
    setTimeout(() => {
        load_done = true
    }, total_wait); 
    add_events();    
}


function add_events() {    
    r_forward.addEventListener("click", function (e) {
        selectButton(r_forward_btn)
    }, false);

    forward.addEventListener("click", function (e) {
        selectButton(forward_btn)
    }, false);

    back.addEventListener("click", function (e) {
        selectButton(back_btn)
    }, false);    
}

function selectButton(selected) {
    if (load_done) {
        load_done = false;
        if (selected.id == "back") {
            goBack();
        }
        else if (selected.id == "forward") {
            goForward();
        }
        else {
            made_it_through = false;
            goForward();
        }
    }
}


function goForward () {
    clear_intervals_on_pg();
    clear_timeouts_on_pg();
    var wait_to_deal_with_old_set = 3000;
    var wait_before_slide = 1500;
    if (current_set_id == "start") {
        wait_before_slide = 4000;
    }
    var allow_to_deal_with_slide = 1000;
    var wait_before_done = wait_to_deal_with_old_set + wait_before_slide + allow_to_deal_with_slide;
    
    // Set currently on page
    var prev_id = current_set_id;
    console.log(prev_id);
    console.log(current_set_id);
    // Set to be added
    // Coming forward from end screen
    current_set_id = data[current_set_id]["forward"];

    console.log(current_set_id);
    var prev_div = document.getElementById(prev_id);
    
    // Add next set html
    addHTML(wrapper, data[current_set_id]);
    forward_difference++;
    
    var was_back = data[prev_id]["is_back"];
    // If coming from back
    if (was_back) {
        // Pause any music from back still playing
        for (audioEle in back_audio) {
            back_audio[audioEle].pause()
        }
        // Go forward
        black_screen.style.visibility = "visible";
        // Inc times_back only if made it through entire back scene
        if (made_it_through) {
            times_back++;
        }
        else {
            made_it_through = true;
        }
        
        wrapper.removeChild(prev_div);
        setTimeout(() => {
            // Add any music to play needed 
            if (times_back > forward_playing_audio.length 
                && forward_playing_audio.length < forward_audio.length) {
                forward_playing_audio.push(forward_audio[forward_playing_audio.length]);
            }
            //  Play needed music
            for (audioEle in forward_playing_audio) {
                forward_playing_audio[audioEle].play();
            }
            black_screen.style.visibility = "hidden";
            black_bg.style.visibility = "hidden";
            // Make back visible in case back made invisible
            back_btn.style.visibility = "visible";
            forward_btn.style.visibility = "visible";
            r_forward_btn.style.visibility = "hidden";
        }, wait_to_deal_with_old_set);
    }
    // Coming from forward
    else {
        if (prev_id == "door1") {
            document.getElementById("f_door").style.transition = "transform 4s";
        }
        // Slide the eles visible on page away and remove
        slideEles(document.getElementById(prev_id), 300, -300);
        setTimeout(() => {
            wrapper.removeChild(prev_div);
        }, wait_to_deal_with_old_set);
    }

    // Slide in next eles
    if (current_set_id != "end3") {
        setTimeout(() => {
            slideEles(document.getElementById(current_set_id), 300, -150);
    
            if (!back_btn_up) {
                back_btn.style.transform = "translateY(-20vw)"
                back_btn.style.transition = "opacity 4s, margin-bottom 1s,"
                back_btn_up = true;
            }
        }, wait_before_slide);
    }
    
    setTimeout(() => {
        // Problem because below this?
        load_done = true;
        if (current_set_id != "end1" && current_set_id != "end2" && current_set_id != "end3") {
            trigger_chance(was_back);
        }
        else if (current_set_id == "door1") {
            door1();
        }
        else if (current_set_id == "end1") {
            end1();
        }
        else if (current_set_id == "end3") {
            console.log("calling end3 from forward");
            end3();
        }
    }, wait_before_done);
}


function goBack () {
    clear_intervals_on_pg();
    clear_timeouts_on_pg();
    var prev_id = current_set_id;
    current_set_id = data[current_set_id]["back"];

    var back_set = data[current_set_id]
    var t1 = setTimeout(() => {
        timeouts.push(t1);
        
        // If end
        if (current_set_id == "end2") {
            // Good end
            if (times_back == good_end[0] || times_back == good_end[1]) {
                current_set_id = "end2";;
                end2();
            }
            // Too many end
            else if (times_back > good_end[1]){
                back.addEventListener("click", function (e) {
                    selectButton(back_btn)
                }, false);    
                current_set_id = "end1";
                var q_wait = 100;
                setTimeout(() => {
                    document.getElementById("q").style.visibility = "visible";
                    load_done = true;
                }, q_wait);    
            }
            else {
                current_set_id = "end1";
                load_done = true;
                back_btn.style.visibility = "hidden";
            }
        }

        // Any other go back
        else {
            // Pause any music from forward
            for (audioEle in forward_playing_audio) {
                forward_playing_audio[audioEle].pause()
            }
            
            // Make screen black, add next elements to page
            black_screen.style.visibility = "visible";
            addHTML(wrapper, back_set);
            // Remove old elements
            wrapper.removeChild(wrapper.firstElementChild);
            back_btn.style.visibility = "hidden";
            forward_btn.style.visibility = "hidden";
            r_forward_btn.style.visibility = "visible";
            
            // Call func to handle back scene
            if (current_set_id == "door2") {
                door2();
            }
            else if (current_set_id == "phone2") {
                phone2();
            }
            else if (current_set_id == "shrooms2") {
                shrooms2();
            }
            else if (current_set_id == "tv2") {
                tv2();
            }
        }
    }, 2000);
}


function end1 () {
    var bubble_wait = 1000;
    var move_wait = 1000;
    var bubble = document.getElementById("bubble"); 
    setTimeout(() => {
        bubble.style.opacity = "1";
        back_btn.style.opacity = "0";
        setTimeout(() => {
            back_btn.style.left = "calc(49vw - 18vh)";
            back_btn.style.marginBottom = "15vh";
            back_btn.style.opacity = "1";
        }, move_wait)

    
    }, bubble_wait)

    setTimeout(() => {

    })
}

function end2 () {
    const black_screen_trans = 3000;
    const hand_wait = 1000;
    const frame_move_wait = 2000;
    var total_wait = black_screen_trans + hand_wait + frame_move_wait + 26000;
    // Add this stuff to doc before make visible so loads faster

    // Fade to black
    black_screen.style.opacity = "0";
    setTimeout(() => {
        black_screen.style.visibility = "visible";
        black_screen.style.opacity = "1";
        setTimeout(() => {
            // black_screen.style.opacity = "1";
            addHTML(wrapper, data[current_set_id]);
            const handL = document.getElementById("hl");
            const handR = document.getElementById("hr");
            const frame = document.getElementById("overwhelm");
            handL.style.transform = "translateX(-3vw)"
            handR.style.transform = "translateX(3vw)"
            // Remove old elements
            wrapper.removeChild(wrapper.firstElementChild);
            back_btn.style.visibility = "hidden";
            forward_btn.style.visibility = "hidden";
            black_screen.style.visibility = "hidden";
            black_bg.style.visibility = "visible";
            setTimeout(() => {
                handL.style.transform = "translate(3vw, -60vh)"
                handR.style.transform = "translate(-3vw, -70vh)"
                setTimeout(() => {
                    frame.style.transform = "scale(.5, .5)"
                    // frame.style.transform = "translateY(-20vh)"
                    black_screen.style.opacity = 0;
                    setTimeout(() => {
                        black_screen.style.visibility = "visible";
                        black_screen.style.opacity = "1";
                    }, total_wait)
                }, frame_move_wait);
            }, hand_wait);
        }, black_screen_trans);
    }, black_screen_trans);
}

function end3 () {
    // If here to determine which is done
    // If here because went back too few times and forward
    console.log("here");
    if (!(times_back == good_end[0] || times_back == good_end[0])) {
        setTimeout(() => {
            for (i = 0; i < back_audio.length; i++) {
                back_audio[i].play();
            }
            var frame = document.getElementById("overwhelmb")
            frame.style.visibility = "visible";
            forward_btn.style.visibility = "hidden";
            back_btn.style.visibility = "hidden";
        }, 1000);
    }
    else {
        console.log("going good");
        end4();
    }
}

// Just white
function end4 () {
    forward_btn.style.transform = "translateY(20vw)";
    back_btn.style.transform = "translateY(20vw)";
}

function tv2 () {
    var total_wait = 15000;

    var t1 = setTimeout(() => {
        timeouts.push(t1);
        rainAudio.play();
        // Remove black screen
        black_screen.style.visibility = "hidden";
        black_bg.style.visibility = "visible";
        load_done = true;
        
        document.getElementById("tv2-bg").style.visibility = "visible";
        document.getElementById("car").style.visibility = "visible";
    }, 3000);
    // Go forward
    wait_and_go_forward(total_wait);
}

function shrooms2 () {
    var total_wait = 24000;
    var zoom_factor = 2.5;
    var t1 = setTimeout(() => {
        timeouts.push(t1);
        // Remove black screen
        black_screen.style.visibility = "hidden";
        document.getElementById("mushrooms").style.transform = "scale(2, 2)";
        load_done = true;
        androidAudio.play()
        var t2 = setTimeout(() => {
            timeouts.push(t2);
            document.getElementById("mushrooms").style.visibility = "hidden";
            document.getElementById("table").style.visibility = "visible";
            var t3 = setTimeout(() => {
                timeouts.push(t3);
                document.getElementById("table").style.visibility = "hidden";
                document.getElementById("toilet").style.visibility = "visible";
                document.getElementById("bendu").style.visibility = "visible";
                document.getElementById("static1").style.visibility = "visible";
                var t4 = setTimeout(() => {
                    timeouts.push(t4);
                    document.getElementById("bendu").style.visibility = "hidden";
                    document.getElementById("bendl").style.visibility = "visible";
                    var t5 = setTimeout(() => {
                        timeouts.push(t5);
                        document.getElementById("static2").style.visibility = "visible";
                        document.getElementById("vom").style.visibility = "visible";
                        document.getElementById("bendl").style.transform = `scale(${zoom_factor}, ${zoom_factor})`
                        document.getElementById("vom").style.transform = `scale(${zoom_factor}, ${zoom_factor})`
                        document.getElementById("toilet").style.transform = `scale(${zoom_factor}, ${zoom_factor})`
                    }, 200);
                }, 6000);
            }, 5500);
        }, 5500);
    }, 3000);
    // Go forward
    wait_and_go_forward(total_wait);
}


function door1 () {
    setTimeout(() => {
        document.getElementById("f_door").style.transition = "transform 500s";
        document.getElementById("f_door").style.transform = "scale(5, 5)";
    }, 2000)
}


// Handle door2 scene
// 8s total
function door2 () {
    var total_wait = 11000;
    // Add this stuff to doc before make visible so loads faster
    var t1 = setTimeout(() => {
        timeouts.push(t1);
        droneAudio.play();
        memoryAudio.play();
        // Remove black screen
        black_screen.style.visibility = "hidden";
        black_bg.style.visibility = "visible";
        load_done = true;
        var t2 = setTimeout(() => {
            timeouts.push(t2);
            knockAudio.play();
        }, 3000);
        // Maybe change this
        if (times_back >= 2) {
            var t3 = setTimeout(() => {
                timeouts.push(t3);
                smashAudio.play();
                // Add static and other changs after a bit
                document.getElementById("kick").style.visibility = "visible";
                document.getElementById("squint").style.visibility = "visible";
                document.getElementById("static").style.visibility = "visible";
                document.getElementById("b_door").style.visibility = "hidden";
                document.getElementById("b_girl").style.visibility = "hidden";
            }, 5500);
        }
    }, 3000);
    



    // Go forward
    wait_and_go_forward(total_wait);
}


function phone2 () {
    var total_wait = 12000;
    // Add this stuff to doc before make visible so loads faster
    var t1 = setTimeout(() => {
        timeouts.push(t1);
        memoryAudio.play();
        androidAudio.play()

        // Remove black screen
        black_screen.style.visibility = "hidden";
        black_bg.style.visibility = "visible";
        load_done = true;

        // Maybe change this

        var wait = 1500;
        var t2 = setTimeout(() => {
            timeouts.push(t2);
            // Add static and other changs after a bit
            document.getElementById("f22").style.visibility = "visible";
            set_jitter(
                document.getElementById("f22"), 
                document.getElementById("f22g"), 
                1000, 
                900);
            var t3 = setTimeout(() => {
                timeouts.push(t3);
                var t4 = setTimeout(() => {
                    timeouts.push(t4);
                    document.getElementById("d2").style.visibility = "visible";
                    set_jitter(
                        document.getElementById("d2"), 
                        document.getElementById("d2g"), 
                        400, 
                        300);
                    var t5 = setTimeout(() => {
                        timeouts.push(t5);
                        document.getElementById("b2").style.visibility = "visible";
                        set_jitter(
                            document.getElementById("b2"), 
                            document.getElementById("b2g"), 
                            800, 
                            750);
                    }, wait);
                }, wait);
            }, wait);
        }, wait);
    }, 3000);

    // Go forward
    wait_and_go_forward(total_wait);
}

// Jitter between two states
function set_jitter(state1, state2, timeout, jitter_time) {
    if (data[current_set_id]["is_back"]) {
        var state_switch = true;
        interval = setInterval(() => {
            state_switch = !(state_switch);
            if (state_switch) {
                state1.style.visibility = "visible";
                state2.style.visibility = "hidden";
            }
            else {
                var t1 = setTimeout(() => {
                    timeouts.push(t1);
                    state2.style.visibility = "visible";
                    state1.style.visibility = "hidden";
                }, jitter_time);
            }
        }, timeout);
        intervals.push(interval);
    }
}

function wait_and_go_forward(wait) {
    var t1 = setTimeout(() => {
        timeouts.push(t1);
        if (data[current_set_id]["is_back"]) {
            goForward();
        }
    }, wait);
}


async function slideEles(div, pause, trans) {
    var eles = div.children;
    for (i = 0; i < eles.length; i++) {
        var ele = eles[i]; 
        await new Promise(resolve => {
            setTimeout(() => {
                ele.style.transform = `translateX(${trans}vw)`;
                resolve()}, pause);
            })
    }
}


function create_img_ele (src, className, id, hidden) {
    var ele = document.createElement("img");
    ele.className = className;
    ele.src = src;
    ele.id = id;
    if (hidden) {
        ele.style.visibility = "hidden";
    }
    return ele;

}


function addHTML(ele, set) {
    var temp = document.createElement("div");
    temp.id = set["div_id"]
    temp.className = set["div_class"];
    temp.innerHTML = set["html"];
    ele.append(temp);
}


function removeHTML(ele) {
    while (ele.firstChild) {
        ele.removeChild(ele.firstChild);
    }
}


function clear_intervals_on_pg () {
    // If any intervals were set, clear them
    while (intervals.length > 0) {
        clearInterval(intervals[0]);
        intervals.splice(0, 1);
    }
}

function clear_timeouts_on_pg () {
    // If any timeouts were set, clear them
    while (timeouts.length > 0) {
        clearTimeout(timeouts[0]);
        timeouts.splice(0, 1);
    }
}


// Change of triggering go back event if you haven't gone
// back very much compared to how much you've gone forward. 
// Higher chance if you were just back
function trigger_chance(back) {
    var bound;
    if (back) {
        bound = 3;
    }
    else {
        bound = 5;
    }
    var chance = Math.floor(Math.random() * bound) + 1; 
    if (forward_difference - times_back >= 2 && chance == 1) {
        load_done = false;
        console.log("...")
        forward_difference -= 3;
        goBack();
    } 
}




start()