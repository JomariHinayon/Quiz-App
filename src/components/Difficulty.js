
const Difficulty = (props) => {
    return(
        <select 
                className='difficulty ' 
                onChange={ (e) => props.setDiff(e.target.value)}
                value={props.diff}>   
                    <option value="">Select Difficulty</option>
                    <option key='Easy' value='easy'>Easy</option>
                    <option key='Medium' value='medium'>Medium</option>
                    <option key='Hard' value='hard'>Hard</option>
        </select>
    )
}

export default Difficulty;