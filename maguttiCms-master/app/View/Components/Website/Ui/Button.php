<?php

namespace App\View\Components\Website\Ui;


use App\View\Components\Website\Widgets\BaseWidget;
use Illuminate\View\Component;
use Illuminate\View\View;
use phpDocumentor\Reflection\Types\Void_;


class Button extends BaseWidget
{
    public $item;
    /**
     * @var null
     */
    public $route;
    /**
     * @var null
     */
    protected $label;

    /**
     * Create a new component instance.
     *
     * @return void
     */
    public function __construct($item=null,$route=null,$label=null)
    {
        $this->item  = $item;
        $this->route = $route;
        $this->label = $label;
    }

    /**
     * Get the view / contents that represent the component.
     *
     * @return \Illuminate\View\View|string
     */
    public function render() :View
    {
        return view('components.website.ui.button');
    }

    public function getLink(): string
    {
        return ($this->route)?route($this->route):page_permalink_by_id($this->item->link);
    }

    public function getLabel() :string
    {
       return $this->label ?? $this->item->btn_title;
    }

}
