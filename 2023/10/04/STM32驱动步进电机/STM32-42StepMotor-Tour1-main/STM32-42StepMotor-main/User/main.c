#include "stm32f10x.h"
#include "bsp_key.h"
#include "bsp_stepmotor.h"

void Delay(__IO uint32_t nCount){
	for (; nCount != 0; nCount--)
		;
};

void Step_90_Degrees(){
	// NC = 1600, 800 toggles means 90 degree motor rotation
	for (int i = 0; i < 800; i++)
	{	
		MOTOR_PUL_Toggle;  //��ת800��
		// The delay time determines the motor speed
		Delay(0xfff);  //delayʱ��ĳ��̾��������ת���ٶȣ������ʱ�ǲ�׼ȷ�ģ�����Ҫ��׼����ʱ���ɲ��ö�ʱ��
	}
}
//
int main(void)
{
	Key_GPIO_Config();   //���������ã���ʼ��
	Stepper_Pin_Init();  //�����������
	Delay(0xfffff);      //������ʱ����Ƭ�����ó�ʼ��
	// Keep detecting the Key status
	while(1){
		if (Key_Scan(KEY1_GPIO_PORT, KEY1_GPIO_PIN) == KEY_ON){
			// Counter Clock Wise for KEy1
			MOTOR_DIR_CCW;     //���ò������Ϊ��ʱ����ת����
			Step_90_Degrees(); //��������˿ڣ�ʹ���������ת90��
		}
		if (Key_Scan(KEY2_GPIO_PORT, KEY2_GPIO_PIN) == KEY_ON){
			// Counter Clock Wise for KEy2
			MOTOR_DIR_CW;       //���ò������Ϊ˳ʱ����ת����
			Step_90_Degrees();
		}
	}
}
