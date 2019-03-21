import  styled  from 'styled-components';
import Paper from '@material-ui/core/Paper';
import  Input  from '@material-ui/core/Input';

export const StyledPaper = styled(Paper)`
    padding: 2px 4px;
    display: flex;
    align-items: center;
    max-width: 400px;
    width:80%;
    min-height:52px;
`

export const StyledInput = styled(Input)`
    margin-left: 8;
    flex: 1;
`