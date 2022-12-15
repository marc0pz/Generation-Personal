import React, { useState, useEffect } from "react";


const initialUsuario = {
    nombre: "",
    contrasenia: "",
    edad: "",
    email: "",
};

const FormUsuario = ({ userAdd, usuarioEditado, setUsuarioEditado, userEdit }) => {
    const [usuario, setUsuario] = useState(initialUsuario);
    const { nombre, contrasenia, edad, email } = usuario;

    useEffect(() => {
        if (usuarioEditado !== null) {
            setUsuario(usuarioEditado);
        } else {
            setUsuario({
                nombre: "",
                contrasenia: "",
                edad: "",
                email: "",
            }
            );
        }

    }, [usuarioEditado]);

    const handleInputChange = (e) => {
        const changedFormValue = {
            ...usuario,
            [e.target.name]: e.target.value,
        }
        setUsuario(changedFormValue);
    }

    return (
        <div id="divFormUsuario">
            {/* Formulario */}

            <form class="container" id="formUsuario">
                {/* distinto de nulo, igual a nulo */}
                {usuarioEditado !== null ? <h1>Editar usuario</h1> : <h1>Ingrese usuario</h1>}

                <div >
                    {/* Row para Formulario */}
                    <div class="row">

                        {/* Solicitud nombre */}
                        <div class="mb-3 form-control-sm col-sm ms-5">


                            <input
                                type="text"
                                class="form-control"
                                id="nombreEjemplo"
                                name="nombre"
                                value={nombre}
                                onChange={handleInputChange}
                            ></input>



                        </div>


                        {/* Solicitud contraseña */}
                        <div class="mb-3 form-control-sm col-sm ms-5">
                            <label for="inputContrasenia" class="form-label">
                                Contraseña
                            </label>


                            <input
                                type="text"
                                class="form-control"
                                id="contraseniaEjemplo"
                                name="contrasenia"
                                value={contrasenia}
                                onChange={handleInputChange}
                            ></input>




                        </div>
                    </div>
                    <div class="row">


                        {/* Solicitud edad */}
                        <div class="mb-3 form-control-sm col-sm ms-5">


                            <input
                                type="text"
                                class="form-control"
                                id="edadEjemplo"
                                name="edad"
                                value={edad}
                                onChange={handleInputChange}
                            ></input>



                        </div>


                        {/* Solicitud email */}
                        <div class="mb-3 form-control-sm col-sm ms-5">
                            <label for="inputEmail" class="form-label">
                                Email
                            </label>

                            <input
                                type="text"
                                class="form-control"
                                id="emailEjemplo"
                                name="email"
                                value={email}
                                onChange={handleInputChange}
                            ></input>



                        </div>




                    </div>
                    {usuarioEditado !== null ? (
                        <button
                            type="button"
                            class="btn btn-success"
                            onClick={() => userEdit(usuario)}
                        >
                            Editar usuario
                        </button>
                    ) : (
                        <button
                            type="button"
                            class="btn btn-success"
                            onClick={() => userAdd(usuario)}
                        >
                            Ingresar usuario
                        </button>
                    )}
                    {usuarioEditado !== null ? (
                        <button
                            type="button"
                            class="btn btn-danger"
                            onClick={() => setUsuarioEditado(null)}
                        >
                            Cancelar
                        </button>
                    ) : (
                        <></>
                    )}



                </div>
            </form>

        </div>
    );
};

export default FormUsuario;
