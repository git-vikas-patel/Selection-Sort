const panelHeight = 750;
const panelWidth = 1400;
let numberOfBars = 200;
const MAXNUMBER = 750;
let args = [];
for (i = 0; i < numberOfBars; i++) {
    $(".wrapper").append('<div class="bar"></div>');
}
function gernratRamdomArray() {
    let i = 0;
    for (i = 0; i < numberOfBars; i++) {
        args[i] = Math.floor(Math.random() * MAXNUMBER);
    }
    $(".bar").width((Math.floor((panelWidth-1) / numberOfBars)).toString());
}
function paintChart(curren_indx, k_indx) {
    let j = 0;
    $(".bar").each(function () {
        $(this).height((args[j++] ).toString());//* (panelHeight / 100)
        // $(this).text(args[j++]+" |");
        if (j == curren_indx || j == k_indx)
            $(this).css('background', '#fc0025');
        else
            $(this).css('background', '#bd00fc');
    });
}
$("#reset").click(() => {
    gernratRamdomArray();
    paintChart();
});

async function selectionSort() {
    for (let k = 0; k < (numberOfBars-1); k++) {
        let min_indx = k;
        for (let l = k + 1; l < numberOfBars; l++) {
            if (args[l] <= args[min_indx]) {
                min_indx = l;
                paintChart(k, l);
            }
        }
        let temp_var = args[k];
        args[k] = args[min_indx];
        args[min_indx] = temp_var;
        await sleep(1);
    }
}

$("#start").click(() => {
    selectionSort();
});

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}