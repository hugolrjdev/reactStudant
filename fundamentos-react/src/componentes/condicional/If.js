/* eslint-disable import/no-anonymous-default-export */
/* <if test={expressao ex aluno.nota >= 7}>
    <span>...</span>
    <span>...</span>
    <span>...</span>
</if> */

export default props=>{
    if(props.test) {
        return props.children;
    } else { return false }
}