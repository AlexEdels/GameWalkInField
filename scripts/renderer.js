let renderer = {
    /**
     * Метод рисует игровое поле и игрока на нем.
     */
    renderBoard() {
        let result = this.generateBoard();
        document.body.insertAdjacentHTML('afterbegin', result);
        this.renderUserPosition(player);
    },

    /**
     * Метод генерирует игровое поле на основании размеров в конфиге.
     * @returns {string} сгенерированный html-код таблицы (игрового поля).
     */
    generateBoard() {
        let board = "";
        for (let y = 0; y < config.rowsCount; y++) {
            board += "<tr>";
            for (let x = 0; x < config.colsCount; x++) {
                board += `<td data-x="${x}" data-y="${y}"></td>`;
            }
            board += "</tr>";
        }
        return `<table><tbody>${board}</tbody></table>`;
    },

    /**
     * Если ячейка с переданными координатам есть, то возвращается ее объект,
     * если иначе, то возвращается null.
     * @param {{x: number, y: number}} position - объект с координатами
     * @returns {HTMLTableCellElement|null} объект ячейки если есть, в противном случае null.
     */
    getSquare(position) {
        return document.querySelector(`[data-x="${position.x}"][data-y="${position.y}"]`);
    },

    /**
     * Метод рисует расположение пользователя для указаной координаты
     * для этого он добавляет тегу <td> класc ".user"
     * @param {{x: number, y: number}} position 
     */
    renderUserPosition(position) {
        let square = this.getSquare(position);
        square.classList.add('user');
    },

    clearUserPosition() {
        document.querySelector(".user").classList.remove("user");
    }
};


