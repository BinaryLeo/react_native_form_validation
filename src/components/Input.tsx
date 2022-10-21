
import {Input as NativBaseInput, IInputProps} from 'native-base'
export function Input({...rest}:IInputProps){
    return(
<NativBaseInput
bg={"gray.700"}
fontSize={"md"}
h={16}
mb={4}
_focus={{bg:"gray.200"}}
{...rest}
/>
    )
    }
