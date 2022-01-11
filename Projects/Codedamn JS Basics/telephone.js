function telephoneCheck(str) {
  const reg1 = /^\d{3}-\d{3}-\d{4}$/g;
  const reg2 = /^\d \d{3}-\d{3}-\d{4}$/g;
  const reg3 = /^\d \D\d{3}\D \d{3}-\d{4}$/g;
  const reg4 = /^\d{10}$/g;
  const reg5 = /^\D\d{3}\D\d{3}-\d{4}$/g;
  const reg6 = /^\d\D\d{3}\D\d{3}-\d{4}$/g;
  const reg7 = /^\d \d{3} \d{3} \d{4}$/g;
  return (
    reg1.test(str) ||
    reg2.test(str) ||
    reg3.test(str) ||
    reg4.test(str) ||
    reg5.test(str) ||
    reg6.test(str) ||
    reg7.test(str)
  );
}

console.log(telephoneCheck("555-555-5555"));
