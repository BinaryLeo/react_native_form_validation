
import {Input as NativBaseInput, IInputProps, FormControl} from 'native-base'
type InputProps  = IInputProps & {
    ErrorMessage?: string | null,
}
export function Input({ErrorMessage = null, isInvalid,...rest}:InputProps){
 const invalid = !!ErrorMessage || isInvalid 
    return(
<FormControl mb={4} isInvalid={invalid}>
<NativBaseInput
bg={"gray.700"}
fontSize={"md"}
h={16}
isInvalid={invalid}
_focus={{bg:"gray.200"}}
{...rest}
/>
<FormControl.ErrorMessage>
   {ErrorMessage}
</FormControl.ErrorMessage>
</FormControl>
    )
    }
