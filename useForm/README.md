# useForm Hook

Ejemplo de uso:
```
    const initialForm = {
        name: '',
        age: 0,
        email: ''
    };
    const [ formValues, hanldeInputChange, reset ] = useForm( initialForm );
```