import java.util.Scanner;

public class BancoAzul {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        double saldo = 0;
        String extrato = "";
        int numeroSaques = 0;
        int limiteSaques = 3;
        double limiteValor = 500;

        while (true) {
            System.out.println("=======================");            
            System.out.println("Selecione uma opção:");            
            System.out.println("[d] - Depósito");            
            System.out.println("[s] - Saque");            
            System.out.println("[e] - Extrato");            
            System.out.println("[q] - Sair");
            System.out.println("=======================");

            String menu = scanner.nextLine();
            
            if (menu.equals("d")) {
                System.out.println("Informe o valor do depósito: R$ ");
                double valor = scanner.nextDouble();
                scanner.nextLine();


                if (valor > 0) {
                    saldo += valor;
                    extrato += "Depósito de R$ " + valor + "realizado"; 
                    System.out.printf("Déposito de R$ %.2f realizado com sucessso %n", valor);
                }else{
                    System.out.println("@@@  Operação Falhou! O valor informado é inválido!  @@@");
                }
            } else if(menu.equals("s")) {
                System.out.println("Informe o valor do saque: R$ ");
                double valor = scanner.nextDouble();
                scanner.nextLine();

                boolean excedeuSaque = numeroSaques >= limiteSaques;
                boolean excedeuLimiteValor = valor > limiteValor;
                boolean excedeuSaldo = valor > saldo;
                if (excedeuSaldo) {
                    System.out.println("@@@  Operação Falhou! Você não tem saldo suficiente!  @@@");
                }else if (excedeuSaque) {
                    System.out.println("@@@  Operação Falhou! O número de saques foi excedido!  @@@");
                } else if (excedeuLimiteValor) {
                    System.out.println("@@@  Operação Falhou! O valor do saque excede o limite! @@@");
                } else if (valor > 0) {
                    saldo -= valor;
                    extrato = extrato + String.format("Saque de R$ %.2f%n", valor);
                    System.out.printf("Saque de %.2f realizado com sucesso!", valor);
                    numeroSaques++;
                } else {
                    System.out.println("@@@  Operação Falhou! O valor informado é inválido!  @@@");
                }
            } else if (menu.equals("e")) {
                String mensagem = extrato == "" ? "Não foram realizados movimentações." : extrato;
                System.out.println(" ==== EXTRATO ====");
                System.out.println(mensagem);
                System.out.printf("Saldo: R$ %.2f", saldo);
                System.out.println(" =================");
            } else if (menu.equals("q")) {
                    System.out.println("Obrigada pela preferência !!!");
                    break;
            } else {
                    System.out.println("@@@ Opção inválida, por favor selecione uma operação correta! @@@");
            }
        }     
            scanner.close();
        }
}