package com.minzheng.blog.controller;

import com.minzheng.blog.constant.StatusConst;
import com.minzheng.blog.service.impl.TokenService;
import com.minzheng.blog.utils.ServletUtils;
import com.minzheng.blog.vo.Result;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * @ClassName SysLoginController
 * @Decription TODO
 * @Author YingBo.Dai
 * @Date 2021/1/13
 **/
@RestController
public class SysLoginController {
    @Autowired
    private TokenService tokenService;

    @GetMapping("/getInfo")
    public Result getInfo(){
//        LoginUser loginUser =
                tokenService.getLoginUser(ServletUtils.getRequest());
        return new Result(true, StatusConst.OK, "查询成功", null);
    }

}
