export const valid = (num) =>
  num.replace(/[" "]/g, "").length <= 1
    ? false
    : num
        .replace(/[" "]/g, "")
        .split("")
        .reverse()
        .reduce(
          (a, b, index) =>
            index % 2 !== 0
              ? Number(b) * 2 < 9
                ? Number(b) * 2 + Number(a)
                : Number(b) * 2 + Number(a) - 9
              : Number(a) + Number(b),
          0
        ) %
        10 ===
      0;
