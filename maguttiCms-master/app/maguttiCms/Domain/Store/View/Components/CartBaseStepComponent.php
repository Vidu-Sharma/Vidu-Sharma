<?php


namespace App\maguttiCms\Domain\Store\View\Components;


use Illuminate\View\Component;

 abstract class CartBaseStepComponent extends Component
{
     public $cart;

     public function __construct($cart)
     {


         $this->cart = $cart;
     }
}