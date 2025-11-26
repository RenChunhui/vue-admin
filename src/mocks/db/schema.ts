export interface User {
  id?: number;          // 自动递增
  username: string;     // 登录名
  password: string;     // 加密后的密码
  realname?: string
  address?: string
  phone?: string
  email?: string;

  roleIds?: number[]

  createdAt: Date
  updatedAt: Date
}

export interface Role {
  id?: number;
  name: string;         // 角色名称，如：管理员
  code: string;         // 唯一标识，如：admin
  createdAt: Date
  updatedAt: Date
}
