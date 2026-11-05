/** Join truthy class names. */
export const cn = (...classes) => classes.filter(Boolean).join(" ");

export default cn;
