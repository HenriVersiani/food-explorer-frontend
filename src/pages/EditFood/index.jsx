import { Container} from "./styles"
import Header from "../../components/Header"
import Button from "../../components/Button"
import Input from "../../components/Input"
import {BsBoxArrowInUp} from 'react-icons/bs'
import { Tag } from "../../components/Tag"
import { Link } from "react-router-dom"

export default function EditFood(){
    return(
        <Container>
            <Header perfil={'admin'} />
            <h1 id="name">
                <Link to="/">&lt; Voltar</Link>               
            </h1>
            <h1 id='add'>Editar Prato</h1>
            <div id='main'>
                <div id="info">
                    <div id="first">
                        <label> Imagem do Prato 
                            <p id='input1'>
                                <BsBoxArrowInUp className="import"/>
                                Selecione Imagem
                            </p>
                        </label>
                        <Input placeholder='Ex: Salada Ceasar' label='Nome'/>
                        <label id='input3'> Categoria
                            <select name="" id="">
                            <option value="">
                                Refeiçao 
                            </option>
                            <option value="">
                                Sobremesa
                            </option>
                            <option value="">
                                Sucos
                            </option>
                            </select>
                        </label> 
                    </div>
                    <div id='second'>
                    <label> Ingredientes
                            <p id='input4'>
                                <Tag title='Tomate'/>
                                <Tag title='Alfaçe'/>
                                <Tag title='Palmito'/>
                            </p>
                        </label>
                        <Input placeholder='R$ 00,00' label='Preço'/>
                    </div>
                    <div id="third">
                        <label id='label1'htmlFor="">
                            Descrição
                    <textarea placeholder="descriçao colocada ao criar" id='text' rows="5" cols="10" maxlength="500"></textarea>
                        </label>
                    </div>
                    <div id='buttons'>
                    <Button id='Button3'title="Excluir"/>
                    <Button id='Button2'title="Salvar"/>
                </div>
                    </div>  
                </div>
                
        </Container>
    )
}