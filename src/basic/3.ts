/*
Створіть змінну, яка може містити або рядок, або число(union type) ?
Також, оголосіть змінну, яка може містити лише одне з двох можливих рядкових
значень: 'enable' або 'disable'(literal type).
*/

/* Union type */

let mixedType: string | number;

/* Literal type */

type switchOnOff = "on" | "off";
let click: switchOnOff;
