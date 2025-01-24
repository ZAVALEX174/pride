// const rangeSlider1 = document.getElementById('range-slider1');
// const rangeSlider2 = document.getElementById('range-slider2');
// // console.log(rangeSlider1);
//
// if (rangeSlider1) {
//     noUiSlider.create(rangeSlider1, {
//         start: [1, 2000],
//         step: 1,
//         connect: true,
//         keyboardSupport: false,
//         range: {
//             'min': 1,
//             'max': 2000
//         }
//     });
//
//     const input0 = document.getElementById('input-0');
//     const input1 = document.getElementById('input-1');
//     const inputs = [input0, input1];
//
//     rangeSlider1.noUiSlider.on('update', function (values, handle) {
//
//         inputs[handle].value = Math.round(values[handle]);
//     });
//
//     rangeSlider1.noUiSlider.on('keydown', function (values, handle) {
//
//         inputs[handle].value = Math.round(values[handle]);
//     });
//
//     const setRangeSlider1 = (i, value) => {
//
//         let arr = [null, null];
//         arr[i] = value;
//
//         console.log(arr);
//
//         rangeSlider1.noUiSlider.set(arr);
//     };
//
//     inputs.forEach((el, index) => {
//         el.addEventListener('change', (e) => {
//             e.preventDefault();
//             console.log(index);
//             setRangeSlider1(index, e.currentTarget.value);
//         });
//     });
// }
//
// if (rangeSlider2) {
//     noUiSlider.create(rangeSlider2, {
//         start: [45, 1000],
//         step: 1,
//         connect: true,
//         range: {
//             'min': 45,
//             'max': 1000
//         }
//     });
//
//     const input2 = document.getElementById('input-2');
//     const input3 = document.getElementById('input-3');
//     const inputs = [input2, input3];
//
//     rangeSlider2.noUiSlider.on('update', function (values, handle) {
//
//         inputs[handle].value = Math.round(values[handle]);
//     });
//
//     const setRangeSlider2 = (i, value) => {
//
//         let arr = [45, 1000];
//         arr[i] = value;
//
//         console.log(arr);
//
//         rangeSlider2.noUiSlider.set(arr);
//     };
//
//     inputs.forEach((el, index) => {
//         el.addEventListener('change', (e) => {
//             e.preventDefault();
//             console.log(index);
//             setRangeSlider2(index, e.currentTarget.value);
//         });
//     });
// }