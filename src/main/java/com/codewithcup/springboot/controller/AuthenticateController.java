package com.codewithcup.springboot.controller;

import com.codewithcup.springboot.config.JwtUtils;
import com.codewithcup.springboot.helper.UserNotFoundException;
import com.codewithcup.springboot.model.JwtRequest;
import com.codewithcup.springboot.model.JwtResponse;
import com.codewithcup.springboot.model.User;
import com.codewithcup.springboot.service.impl.UserDetailsServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;

@RestController
@CrossOrigin("*")
public class AuthenticateController {

    @Autowired
    private AuthenticationManager authenticateManager;

    @Autowired
    private UserDetailsServiceImpl userDetailsServiceImpl;

    @Autowired
    private JwtUtils jwtUtils;


    //generate token
    @PostMapping("/generate-token")
    public ResponseEntity<?> generateToken(@RequestBody JwtRequest jwtRequest) throws Exception {

        try {
//            System.out.println(jwtRequest);

            authenticate(jwtRequest.getUsername(),jwtRequest.getPassword());

            }catch (UserNotFoundException e){ //UserNotFoundException
            e.printStackTrace();
            throw new UserNotFoundException();//User not found!!!
        }

        /////////////////Authenticate User Successfully
        UserDetails userDetails = this.userDetailsServiceImpl.loadUserByUsername(jwtRequest.getUsername());
        /////////Generate token
        String token = this.jwtUtils.generateToken(userDetails);

        return ResponseEntity.ok(new JwtResponse(token));
    }


    private void authenticate(String username, String password) throws Exception {

        try {
            authenticateManager.authenticate(new UsernamePasswordAuthenticationToken(username, password));

        }catch(DisabledException e){
            throw new Exception("User is Disabled " + e.getMessage());
        }catch(BadCredentialsException e){
            throw new Exception("Invalid credentials" + e.getMessage());
        }
    }

    //get currentUser who is logged in
    @GetMapping("/current-user")
    public User getCurrentUser(Principal principal){

        return ((User)this.userDetailsServiceImpl.loadUserByUsername(principal.getName()));
    }

    //User Not Found Exception Handling
    @ExceptionHandler(UserNotFoundException.class)
    ResponseEntity<?> exceptionHandler (UserNotFoundException e){
        return ResponseEntity.ok(e.getMessage());
    }

}
