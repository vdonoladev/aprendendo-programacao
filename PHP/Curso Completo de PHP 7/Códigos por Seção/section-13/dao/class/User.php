<?php

class User {
	private $idusuario;
	private $dslogin;
	private $dssenha;
	private $dtcadastro;

	public function getIdusuario(){
		return $this->idusuario;
	}

	public function setIdusuario($idusuario){
		$this->idusuario = $idusuario;
	}

	public function getDslogin(){
		return $this->dslogin;
	}

	public function setDslogin($dslogin){
		$this->dslogin = $dslogin;
	}

	public function getDssenha(){
		return $this->dssenha;
	}

	public function setDssenha($dssenha){
		$this->dssenha = $dssenha;
	}

	public function getDtcadastro(){
		return $this->dtcadastro;
	}

	public function setDtcadastro($dtcadastro){
		$this->dtcadastro = $dtcadastro;
	}

	public function setData($data) {
		$this->setIdusuario($data['idusuario']);
		$this->setDslogin($data['dslogin']);
		$this->setDssenha($data['dssenha']);
		$this->setDtcadastro(new DateTime($data['dtcadastro']));
	}

	public function loadById($id) {
		$sql = new Connect();
		$resultado = $sql->select("SELECT * FROM tb_usuarios WHERE idusuario = :ID", array(
			":ID"=>$id
		));

		if (count($resultado) > 0) {
			$this->setData($resultado[0]);
		}
	}

	public static function listUsers() {
		$sql = new Connect();
		return $sql->select("SELECT * FROM tb_usuarios ORDER BY idusuario");
	}

	public static function searchUser($login) {
		$sql = new Connect();
		return $sql->select("SELECT * FROM tb_usuarios WHERE dslogin LIKE :SEARCH ORDER BY idusuario", array(
			":SEARCH"=>"%".$login."%"
		));
	}

	public function desLogin($login, $pass) {
		$sql = new Connect();
		$resultado = $sql->select("SELECT * FROM tb_usuarios WHERE dslogin = :LOGIN AND dssenha = :PASS", array(
			":LOGIN"=>$login,
			":PASS"=>$pass
		));

		if (count($resultado) > 0) {
			$this->setData($resultado[0]);
		} else {
			throw new Exception("Login e/ou senha inválida.");
		}
	}

	public function insert() {
		$sql = new Connect();
		$resultado = $sql->select("CALL sp_usuarios_insert(:LOGIN, :PASS)", array(
			":LOGIN"=>$this->getDslogin(),
			":PASS"=>$this->getDssenha()
		));

		if (count($resultado) > 0) {
			$this->setData($resultado[0]);
		}
	}

	public function update($login, $pass) {
		$this->setDslogin($login);
		$this->setDssenha($pass);

		$sql = new Connect();
		$sql->query("UPDATE tb_usuarios SET dslogin = :LOGIN, dssenha = :PASS WHERE idusuario = :ID", array(
			":LOGIN"=>$this->getDslogin(),
			":PASS"=>$this->getDssenha(),
			":ID"=>$this->getIdusuario()
		));
	}

	public function delete() {
		$sql = new Connect();
		$sql->query("DELETE FROM tb_usuarios WHERE idusuario = :ID", array(
			":ID"=>$this->getIdusuario()
		));

		$this->setIdusuario(null);
		$this->setDslogin(null);
		$this->setDssenha(null);
		$this->setDtcadastro(new DateTime());
	}

	public function __construct($login = "", $pass = "") {
		$this->setDslogin($login);
		$this->setDssenha($pass);
	}

	public function __toString() {
		return json_encode(array(
			"idusuario"=>$this->getIdusuario(),
			"dslogin"=>$this->getDslogin(),
			"dssenha"=>$this->getDssenha(),
			"dtcadastro"=>$this->getDtcadastro()->format("d/m/Y H:i:s")
		));
	}

}

?>