# Проект "Игры разума":
### Hexlet tests and linter status:
[![Actions Status](https://github.com/J-U-L-I-Y-A/frontend-project-44/workflows/hexlet-check/badge.svg)](https://github.com/J-U-L-I-Y-A/frontend-project-44/actions)
<a href="https://codeclimate.com/github/J-U-L-I-Y-A/frontend-project-44/maintainability"><img 
src="https://api.codeclimate.com/v1/badges/7e37444e57aa9b174001/maintainability" /></a>

## Описание проекта
"Игры разума": это проект состоящий из 5 консольных игр, для тренировки вашего мозга. Каждая игра задает по 3 вопроса, 
на которые нужо дать правильные ответы. Если вы ответили на все вопросы, считается что вы прошли игру. 
В случае неправильного ответа игра завершится и вам будет предложено попробовать еще раз.

### Системные требования: 
Версия Node.js: v18.12.1

### Установка:
```
npm ci
```
## Игра: "Проверка на четность"
Описание игры:
Пользователю показывается случайное число. И ему нужно ответить yes, если число чётное, или no — если нечётное.

Запуск игры: 
```
make brain-even
```
[![asciicast](https://asciinema.org/a/hzWzReTsprOW7EB3eI4MF67yq)

## Игра: "Калькулятор"
Описание игры: 
пользователю показывается случайное математическое выражение, например 35 + 16,
которое нужно вычислить и записать правильный ответ.

Запуск игры: 
```
make brain-calc
```
[![asciicast](https://asciinema.org/a/VJAnhZbbGYwLkw1RQkLaNGEhW)

## Игра: "НОД"
Описание игры:
пользователю показывается два случайных числа, например, 25 50. 
Пользователь должен вычислить и ввести наибольший общий делитель этих чисел.

Запуск игры:
```
make brain-gcd
```
[![asciicast](https://asciinema.org/a/Aua8MfblbZAQ3CgwKsEGWlPkT)

## Игра: "Арифметическая прогрессия"
Описание игры:
игроку показывается ряд чисел, образующий арифметическую прогрессию,
с замененным любым из чисел двумя точками. Игрок должен определить это число.

Запуск игры: 
```
make brain-progression
```
[![asciicast](https://asciinema.org/a/TYtnnODVKGGp7ziuXQuj8s6UB)

## Игра: "Простое ли число?"
Описание игры:
игроку показывается случайное число. Если число "простое" ему нужно ответить "yes",  если нет - "no".
Запуск игры: 
```
make brain-prime
```
[![asciicast](https://asciinema.org/a/HHsiPjWkK4b4KmSc3TUtDySv7)



