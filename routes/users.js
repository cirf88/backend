const {Router} = require('express');
const router = Router();
const {createUser, login} = require('../controllers/user.controller')
/**
 * @swagger
 * tags:
 *   name: Users
 *   description: El gestor de los usuarios
 * /api/users:
 *   post:
 *     summary: Registra un usuario en el sistema.
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       200:
 *         description: Esta URL devuelve un mensaje indicando que se guardo correctamente. NOTA Remover paramentro 'id' es irrelevante.
 *         content:
 *           application/json:
 *             schema:
 *               example: {message: 'Usuario registrado'}
 *       500:
 *         description: Algún error del servidor
 * 
 * /api/users/login:
 *   post:
 *     summary: Crea un nuevo usuario
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             example: {"nickname": "cristy", "password" : "cristy88"}
 *     responses:
 *       200:
 *         description: Esta URL devuelve un mensaje indicando si las credenciales son correctas.
 *         content:
 *           application/json:
 *             schema:
 *               example: { message: "La combinación de nombre de usuario y contraseña es correcta", goIn: 1 }
 *       400:    
 *         description: Indica si las credenciasles son incorrectas o sino existe el usuario.
 *         content:
 *           application/json:
 *             schema:
 *               example: [{message: "El nombre de usuario no existe", goIn: 0}, { message: "La contraseña no es válida", goIn: 0 }] 
 *       500:
 *         description: Algún error del servidor
 */
/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       required:
 *         - nickname
 *         - password
 *       properties:
 *         id:
 *           type: String
 *           description: El id auto-generado del usuario
 *         name:
 *           type: String
 *           description: El nombre del usuario
 *         telefono:
 *           type: String
 *           description: El teléfono del usuario
 *         nickname:
 *           type: String
 *           description: El nombre unico del usuario
 *         password:
 *           type: String
 *           description: La contraseña de acceso al sistema.
 *       example:
 *         id: d5fEasz
 *         name: Cristina Irina Rangel Falber
 *         nickname: cristy
 *         password: cristy88
 */
router.route('/')
    .post(createUser)
router.route('/login')
    .post(login)
module.exports = router;