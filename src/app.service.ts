import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
	getHello(): string {
		var message ="Hello world123";
		return message;
	}
}
