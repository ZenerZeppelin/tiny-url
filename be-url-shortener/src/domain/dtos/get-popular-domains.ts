import { IsInt, IsNotEmpty, IsNumberString, Min } from "class-validator";

export class GetPopularDomainsDto {

    @IsNotEmpty()
    @Min(1)
    @IsInt()
    pageNumber: number;

    @IsNotEmpty()
    @Min(1)
    @IsInt()
    pageLimit: number;
}