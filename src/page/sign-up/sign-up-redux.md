# useDispatch()

1. Allows to access the redux dispatch function allowing you triggering the asynchronous actions to redux store.
2. useDispatch hook for sending Dispatching function with asynchronous actions dispatching payload updateFormData() , setError() and signUpUserAsyncThunk (for handling asynchronous API call of signup)
3. dispatch(updateFormData,({[name]:value})) sends an action (updateFormData) to redux store to update formData with users input
4. dispatch(setError(errors)) -> sends an action (validationErrors) to redux store to update errors
5. dispatch(signupUserAsyncThunk(formData)) -> sends an action asynchronous action (signUpUserAsyncThunk) to create async thunk payload creator.

# UseSelector()
1.    
