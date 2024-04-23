function Square({children, isSelected, updateBoard, index, turn}) {
    return <div className={`square ${isSelected ? 'is-selected' : ''}`} onClick={() => {
        updateBoard(index, turn)}}>
        {children}
    </div>
}
export {Square}