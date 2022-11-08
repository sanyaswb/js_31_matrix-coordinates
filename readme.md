## Задание
- Написать функцию <b>getCoordinates</b>, которая принимает двумерный массив, заполненный нулями и одной единицей. Функция должна вернуть координаты единицы (<b>x</b>, <b>y</b>).
- Функция принимает:
  - matrix - массив массивов, заполненных числами.
- Функция должна вернуть объект в виде { x: number, y: number }
  - Где <b>x</b> и <b>y</b> - координаты единицы.

## Примечание
- Количество внутренних массивов и элементов в них - динамическое.

## Примеры
- <p style="display: flex; flex-direction: column; margin-left: 15px">([
    <span style="padding-left: 10px;"> [ 0, 0, 0, 0, 0, 0, 0, 0, 0 ] </span>
    <span style="padding-left: 10px;"> [ 0, 0, 0, 0, 0, 0, 0, 0, 0 ] </span>
    <span style="padding-left: 10px;"> [ 0, 0, 0, 0, <span style="color: orange;">1</span>, 0, 0, 0, 0 ] </span>
    <span style="padding-left: 10px;"> [ 0, 0, 0, 0, 0, 0, 0, 0, 0 ] </span>
  ]) => { x: 4, y: 2 } </p>
- <p style="display: flex; flex-direction: column; margin-left: 15px">([
    <span style="padding-left: 10px;"> [ 0, 0, 0, 0, 0, 0 ] </span>
    <span style="padding-left: 10px;"> [ 0, 0, 0, 0, 0, 0 ] </span>
    <span style="padding-left: 10px;"> [ 0, <span style="color: orange;">1</span>, 0, 0, 0, 0 ] </span>
    <span style="padding-left: 10px;"> [ 0, 0, 0, 0, 0, 0 ] </span>
    <span style="padding-left: 10px;"> [ 0, 0, 0, 0, 0, 0 ] </span>
    <span style="padding-left: 10px;"> [ 0, 0, 0, 0, 0, 0 ] </span>
    <span style="padding-left: 10px;"> [ 0, 0, 0, 0, 0, 0 ] </span>
    <span style="padding-left: 10px;"> [ 0, 0, 0, 0, 0, 0 ] </span>
  ]) => { x: 1, y: 2 } </p>
- <p style="display: flex; flex-direction: column; margin-left: 15px">([
    <span style="padding-left: 10px;"> [ 0, 0 ] </span>
    <span style="padding-left: 10px;"> [ 0, <span style="color: orange;">1</span> ] </span>
  ]) => { x: 1, y: 1 } </p>