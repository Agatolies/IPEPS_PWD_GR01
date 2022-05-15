package ipeps.pwd.wallet.security.entity.payload;
import ipeps.pwd.wallet.common.entity.response.ApiResponse;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class SignupRequest{

    @NotBlank
    @Size(max = 50)
    @Email
    private String username;
    @NotBlank
    private String gender;
    @NotBlank
    @Size(min = 6, max = 40)
    private String password;

    @NotBlank
    @Size(min = 2, max = 50)
    private String firstname;

    @NotBlank
    @Size(min = 2, max = 50)
    private String lastname;


    public ApiResponse isValid() {
        if (username == null || username.isEmpty()) {
            if (password == null || password.isEmpty()) {
                return new ApiResponse(false, null, "api.signup.valid-error-full");
            } else {
                return new ApiResponse(false, null, "api.signup.valid-error-email");
            }
        } else if (password == null || password.isEmpty()) {
            return new ApiResponse(false, null, "api.signup.valid-error-password");
        } else if (firstname == null || firstname.isEmpty()) {
            return new ApiResponse(false, null, "api.signup.valid-error-firstname");
        } else if (lastname == null || lastname.isEmpty()) {
            return new ApiResponse(false, null, "api.signup.valid-error-lastname");
        } else {
            return new ApiResponse(true, this, null);
        }
    }
}

