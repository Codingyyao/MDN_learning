const aliceTumbling = [
  { transform: 'rotate(0) scale(1)' },
  { transform: 'rotate(360deg) scale(0)' }
];

const aliceTiming = {
  duration: 2000,
  iterations: 1,
  fill: 'forwards'
}

const alice1 = document.querySelector("#alice1");
const alice2 = document.querySelector("#alice2");
const alice3 = document.querySelector("#alice3");

const moving1 = alice1.animate(aliceTumbling, aliceTiming);


async function movProducts() {
  try {
    const response = await moving1.finished;

    const moving2 = alice2.animate(aliceTumbling, aliceTiming);
    const response2 = await moving2.finished;

    const moving3 = alice3.animate(aliceTumbling, aliceTiming);
    const response3 = await moving3.finished;
    return response3;
  }

  catch(error) {
    console.error(`无法调整图片：${error}`);
  }
}

const movPromise = movProducts();
movPromise.then((response3) => console.log('All have done!'));