const pertanyaan = document.getElementById("pertanyaan");
const jawaban = document.getElementById("jawaban");

let init = 0;

const botSay = (data) => {
  return [
    "Perkenalkan saya adalah cowok paling ganteng di dunia.Nama kamu siapa ? ",
    `Halo ${data?.nama}, berapa usia kamu?`,
    `Ohh ${data?.usia}, Hahahah kasihan dah tua banget, Btw hobi kamu apa?`,
    `Sama dong aku juga hobi ${data?.hobi},Tua-tua gini pasti pacarnya ganteng ya?`,
    `Jelas ${data?.pacar},kan gak mungkin se ganteng aku ini gak di akui`,
  ];
};

pertanyaan.innerHTML = botSay()[0];

let userData = [];

function botStart() {
  init++;
  if (init === 1) {
    botDelay({ nama: jawaban.value });
  } else if (init === 2) {
    botDelay({ usia: jawaban.value });
  } else if (init === 3) {
    botDelay({ hobi: jawaban.value });
  } else if (init === 4) {
    botDelay({ pacar: jawaban.value });
  } else if (init === 5) {
    finishing();
  } else {
    botEnd();
  }
}

function botDelay(jawabanUser) {
  console.log({ userData: userData });
  setTimeout(() => {
    pertanyaan.innerHTML = botSay(jawabanUser)[init];
  }, [1050]);
  userData.push(jawaban.value);
  jawaban.value = "";
}

function finishing() {
  pertanyaan.innerHTML = `Thx u ${userData[0]} karena telah cinta sama Aldy :)`;
  jawaban.value = "Cinta banget dong pastinya";
}

function botEnd() {
  window.location.reload();
}
