# Spring Boot 3 整合 MyBatis-Plus 完整教程

MyBatis-Plus 是 MyBatis 的增强工具，无需编写 XML 即可完成 CRUD 操作。

## 依赖配置

在 pom.xml 中添加：

```xml
<dependency>
    <groupId>com.baomidou</groupId>
    <artifactId>mybatis-plus-boot-starter</artifactId>
    <version>3.5.5</version>
</dependency>
```

## 实体类

```java
@Data
@TableName("user")
public class User {
    @TableId(type = IdType.AUTO)
    private Long id;
    private String name;
    private String email;
}
```

## Mapper 接口

```java
@Mapper
public interface UserMapper extends BaseMapper<User> {
}
```

## Service 使用

```java
@Service
public class UserService extends ServiceImpl<UserMapper, User> {
    public List<User> getAll() {
        return list();
    }
}
```

整合完成后即可直接调用 `save()`、`removeById()`、`updateById()` 等方法，无需写 SQL。
