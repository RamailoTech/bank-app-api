import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { AccountService } from './account.service';
import { CreateAccountDto } from './dto/create-account.dto';
import { UpdateAccountDto } from './dto/update-account.dto';

@ApiTags('Account')
@Controller('account')
export class AccountController {
  constructor(private readonly accountService: AccountService) {}

  @Post()
  @ApiOperation({ summary: 'Link Bank to the user' })
  create(@Body() createAccountDto: CreateAccountDto) {
    return this.accountService.create(createAccountDto);
  }

  @Get(':userId')
  @ApiOperation({ summary: 'Link Bank to the user' })
  getaccount(@Param('userId') userId: string) {
    return this.accountService.find(userId);
  }

  @Patch(':accountId')
  @ApiOperation({ summary: 'update user Account' })
  update(
    @Param('accountId') accountId: string,
    @Body() updateAccountDto: UpdateAccountDto,
  ) {
    return this.accountService.update(accountId, updateAccountDto);
  }

  @Delete(':userId')
  @ApiOperation({ summary: 'Delete user Account' })
  remove(@Param('userId') id: string) {
    return this.accountService.remove(id);
  }
}
